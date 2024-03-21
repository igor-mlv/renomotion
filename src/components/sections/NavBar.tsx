import styles from "@/styles/styles";
import { navbarLinks } from "@/constants";
import { Button } from "../ui/button";

export default function NavBar() {
    return (
        <nav>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <div className="flex justify-between items-center py-4">
                        <div>
                            <img
                                src="/assets/logo.svg"
                                alt="Logo"
                                className="w-[300px] h-auto"
                            />
                        </div>
                        <ul className="flex items-center space-x-8">
                            {navbarLinks.map((link: { id: string, title: string }, index) => (
                                <li key={link.id} className={`navbarLink ${index === navbarLinks.length - 1 ? 'pr-0' : 'pr-6'}`}>
                                    <a href={`#${link.id}`}>
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Button >Hello</Button>
        </nav>
    );
}