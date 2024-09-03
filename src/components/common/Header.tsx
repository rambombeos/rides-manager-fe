// import { ModeToggle } from '../ModeToggle'
// import { Navbar } from '../navbar/Navbar'
// import { RightNavbar } from '../navbar/RightNavbar'
import { ThemeToggle } from './ThemeToggle'


export const Header = () => {
    return (
        <div>
            <header className="sticky top-0 flex h-11 items-center gap-4 border-b bg-background px-4 md:px-6">
                <div className="w-full" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className='flex gap-4 '>
                        {/* <RightNavbar /> */}
                        <ThemeToggle />
                    </div>
                </div>
            </header>
        </div>
    )
}