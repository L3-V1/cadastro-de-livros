import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar, { NavItem } from "@/components/Sidebar"
import HomeIcon from "@mui/icons-material/Home"
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'

const inter = Inter({ subsets: ["latin"] })

const navItems:NavItem[] = [
    {
        label: "Home",
        link: "/",
        icon: <HomeIcon />
    },
    {
        label: "Cadastrar Livro",
        link: "/livros/salvar",
        icon: <AutoStoriesIcon />
    },
    {
        label: "Listar Livros",
        link: "/livros/listar",
        icon: <LibraryBooksIcon />
    }
]

export const metadata: Metadata = {
    title: "Cadastro de Livros"
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    
    return (
        <html lang="en">
            <body className={`flex h-screen ${inter.className}`}>
                <Sidebar 
                    header={<span className="text-2xl font-light">Cadastro de Livros</span>}
                    items={navItems} 
                />

                <div className="flex-grow bg-zinc-100">
                    {children}
                </div>
            </body>
        </html>
    )
}