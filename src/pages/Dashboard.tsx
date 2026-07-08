import { useState, useEffect } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db, auth } from "../lib/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface ContactSub {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: any;
}

export const Dashboard = () => {
  const [contacts, setContacts] = useState<ContactSub[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      } else {
        fetchContacts();
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const fetchContacts = async () => {
    try {
      const q = query(
        collection(db, "contacts"),
        orderBy("createdAt", "desc")
      );
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ContactSub[];
      setContacts(docs);
    } catch (error: any) {
      console.error("Error fetching contacts:", error);
      toast.error("Could not fetch contacts. Insufficient permissions or network error.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-bg text-text flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent animate-spin rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg text-text p-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <div className="uppercase tracking-[3px] text-xs mb-2 text-primary">
              ADMIN PANEL
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-text">Client Contacts</h1>
          </div>
          
          <button 
            onClick={handleLogout}
            className="px-6 py-2 border border-border rounded-full hover:bg-primary/5 transition-all text-sm font-medium text-text"
          >
            Logout
          </button>
        </div>

        <div className="glass rounded-[32px] overflow-hidden border border-border bg-card shadow-xl">
          {contacts.length === 0 ? (
            <div className="p-12 text-center text-text/50 font-medium">
              No messages found yet.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border text-xs uppercase tracking-widest text-text/50 bg-primary/5 font-bold">
                    <th className="p-6">Name</th>
                    <th className="p-6">Email</th>
                    <th className="p-6">Message</th>
                    <th className="p-6">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {contacts.map((contact, idx) => {
                    const date = contact.createdAt?.toDate ? contact.createdAt.toDate().toLocaleDateString() : 'N/A';
                    return (
                      <motion.tr 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={contact.id} 
                        className="hover:bg-primary/[0.02] transition-colors"
                      >
                        <td className="p-6 font-semibold whitespace-nowrap text-text">{contact.name}</td>
                        <td className="p-6 text-text/70 whitespace-nowrap">
                          <a href={`mailto:${contact.email}`} className="text-primary hover:underline font-medium">
                            {contact.email}
                          </a>
                        </td>
                        <td className="p-6 max-w-lg">
                          <div className="bg-bg p-4 rounded-xl text-text/80 whitespace-pre-wrap text-sm border border-border shadow-inner">
                            {contact.message}
                          </div>
                        </td>
                        <td className="p-6 text-text/50 text-sm whitespace-nowrap font-mono">{date}</td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

