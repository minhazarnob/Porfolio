import {useEffect,useState} from 'react';
import {Menu,X,Sparkles} from 'lucide-react';
import {peronalInfo,Navlinks} from "../../utils/constants"
import { useScrollSpy } from '../../hooks/useScrollSpy';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const activeSection = useScrollSpy(Navlinks.map(link => link.id));

    useEffect(()=>{
        const handleScroll = ()=>{
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return ()=> window.removeEventListener("scroll", handleScroll);
    },[]);

    const handleNavClick = (sectionId) =>{
        scrollToSection(sectionId);
        setIsMenuOpen(false);
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[1000] w-full py-4 bg-[#097e61] transition-all duration-300 ${isScrolled? "bg-black/30 backdrop-blur-lg"
            : "bg-transparent"}`} style={{transform: "translate3d(0,0,0)"}}
        >
            <div className="max-w-[1320px] mx-auto px-5">
                <div className="flex items-center justify-between">

                    {/* logo design*/}
                    <div className="flex items-center gap-4">
                        <Sparkles className="w-8 h-8 text-primary"/>
                        <button
                            onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}
                            className="text-2xl font-bold bg-linear-to-r from-primary via-primary/50 to-primary/30 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                            aria-label="home"
                        >
                            {peronalInfo.name.split(" ")[0]}
                        </button>
                    </div>

                    {/* Desktop Navigation*/ }
                    <nav className="hidden md:flex items-center gap-7">
                        {Navlinks.map((link)=>(
                            <button key={link.id}
                            onClick={()=>handleNavClick(link.id)}
                            className={`text-base font-medium transition-all duration-300 ${activeSection === link.id
                                ? 'text-white':'text-white/70 hover:text-[#59c492]'}`}
                            >{link.label}</button>
                        ))}
                    </nav>

                    {/* CTA Button*/}
                    <div className="hidden md:flex items-center gap-2">
                        <button 
                            onClick={()=>handleNavClick("contact")}
                            className="px-6 py-2 bg-white text-black font-medium text-base rounded-xl border border-white hover:bg-[#59c492] transition-all duration-300"
                        >Hire Me</button>
                    </div>

                    {/* Mobile Menu Button*/}
                    <button
                        onClick={()=> setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-4 text-white hover:text-white/80 trnsition-colors"
                        aria-label="menu"
                        aria-expanded = {isMenuOpen}
                    >
                        {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                    </button>
                </div>
                
                {/* Mobile Menu*/}
                <div
                    className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen?"max-h-96 opacity-100": "max-h-0 opacity-0"}`}
                >
                    <div className="bg-[#07272e] backdrop-blur-lg border-t border-white/10 px-5 py-6 space-y-3 rounded-md">
                        {Navlinks.map((link)=>(
                            <button key={link.id}
                                onClick={()=> handleNavClick(link.id)}
                                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeSection === link.id
                                ? "text-white bg-white/10"
                                : "text-white/70 hover:text-white hover:bg-[#004047]"}`}
                            >{link.label}</button>
                        ))}
                        <button
                            onClick={()=> handleNavClick('contact')}
                            className="w-full px-6 py-2 bg-white text-black font-medium text-base rounded-lg border border-white hover:bg-[#59c492] transition-all duration-300 mt-2 "
                        >Hire Me</button>
                    </div>
                </div>

            </div>     
        </nav>
    );
};

export default Navbar;