import { HardDrive } from "lucide-react"
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return(
        <footer className="border-t border-finance-border py-6 bg-finance-bg">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
                
                <div className="flex flex-col gap-2 font-semibold text-finance-text font-['Outfit']">
                    <span>FinanceControl</span>
                    <span>&copy; {new Date().getFullYear()} — Personal Finance Dashboard.</span>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-finance-card border border-finance-border text-[11px]">
                    <HardDrive className="w-3.5 h-3.5 text-finance-income" />
                    <span className="text-finance-text">Storage: <strong>Local Browser (Online)</strong></span>
                </div>

                <div className="flex items-center gap-4 text-finance-muted">
                    <a
                        href="https://github.com/daveesin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-finance-text transition-colors"
                    >
                        <FaGithub className="w-4 h-4" />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/davi-silva-gonçalves-ba3121250"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-finance-text transition-colors"
                    >
                        <FaLinkedin className="w-4 h-4" />
                        <span>LinkedIn</span>
                    </a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;