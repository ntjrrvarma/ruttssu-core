import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaSpotify, FaGlobe, FaTwitter } from "react-icons/fa";

// Helper to get the right icon
const getIcon = (iconName: string) => {
  const icons: any = {
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    instagram: <FaInstagram />,
    spotify: <FaSpotify />,
    twitter: <FaTwitter />,
    default: <FaGlobe />,
  };
  return icons[iconName] || icons.default;
};

export default async function ConnectPage() {
  const supabase = await createClient();

  // 1. Fetch "Official" Links (Work)
  const { data: officialLinks } = await supabase
    .from("links")
    .select("*")
    .eq("category", "official")
    .order("created_at", { ascending: true });

  // 2. Fetch "Personal" Links (Social)
  const { data: personalLinks } = await supabase
    .from("links")
    .select("*")
    .eq("category", "personal")
    .order("created_at", { ascending: true });

  return (
    <div className="min-h-screen flex flex-col items-center pt-24 pb-12 px-6">
      
      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Connect</h1>
        <p className="text-brand-muted font-mono text-sm">RUTTSSU // NETWORK_HUB</p>
      </div>

      <div className="w-full max-w-md space-y-10">
        
        {/* ZONE 1: OFFICIAL (The Engineer) */}
        {officialLinks && officialLinks.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xs font-mono tracking-widest text-brand-accent uppercase mb-4">Official Protocols</h2>
            {officialLinks.map((link) => (
              <a
                key={link.id}
                href={link.long_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-lg bg-brand-gray border border-white/5 hover:border-brand-accent/50 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl text-gray-400 group-hover:text-white transition-colors">
                    {getIcon(link.icon)}
                  </span>
                  <span className="font-medium">{link.slug.toUpperCase()}</span>
                </div>
                <span className="text-xs font-mono text-gray-600 group-hover:text-brand-accent">OPEN_LINK</span>
              </a>
            ))}
          </div>
        )}

        {/* ZONE 2: PERSONAL (The Human) */}
        {personalLinks && personalLinks.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xs font-mono tracking-widest text-pink-500 uppercase mb-4">Personal Feeds</h2>
            {personalLinks.map((link) => (
              <a
                key={link.id}
                href={link.long_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-lg bg-brand-gray border border-white/5 hover:border-pink-500/50 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl text-gray-400 group-hover:text-pink-400 transition-colors">
                    {getIcon(link.icon)}
                  </span>
                  <span className="font-medium">{link.slug}</span>
                </div>
                <span className="text-xs font-mono text-gray-600 group-hover:text-pink-500">CONNECT</span>
              </a>
            ))}
          </div>
        )}
        
        {/* EMPTY STATE (If no links exist yet) */}
        {(!officialLinks?.length && !personalLinks?.length) && (
          <div className="text-center p-8 border border-dashed border-gray-800 rounded-lg text-gray-500 font-mono text-sm">
            NO_LINKS_DETECTED. <br/> System awaiting database inputs.
          </div>
        )}

      </div>
    </div>
  );
}