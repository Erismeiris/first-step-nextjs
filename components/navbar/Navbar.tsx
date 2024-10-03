import ActiveLink from "../active-link/ActiveLink";


const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Pricing", path: "/pricing" },
    { title: "Contact", path: "/contact" },
];
export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between w-full h-16 px-8 bg-gray-900 text-white">
        <span className="text-lg">Navbar</span>
        <div className="flex items-center space-x-4">
            {navItems.map((item) => (
            <ActiveLink key={item.title} { ...item } />
            ))}           
        </div>
        </nav>
    );
    };