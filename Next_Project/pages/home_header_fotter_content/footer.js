import Link from "next/link";

const Fotter = () => {
    return (
        <>

            <footer class="text-black fixed bottom-0 left-0 z-20 w-full bg-orange-100 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
                <span class="text-black text-sm sm:text-center dark:text-gray-400">© 2023 <a href="https://fahad-web.github.io/Fahad/" class="hover:underline">MD Fahad</a>. All Rights Reserved.
                </span>
                <ul class="text-black flex flex-wrap items-center mt-3 text-sm font-medium dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link href="/about" class="mr-4 hover:underline md:mr-6 text-black">About</Link>
                    </li>
                    <li>
                        <Link href="#" class="mr-4 hover:underline md:mr-6 text-black">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="#" class="mr-4 hover:underline md:mr-6 text-black">Licensing</Link>
                    </li>
                    <li>
                        <Link href="/component/contactform" class="text-black hover:underline">Contact</Link>
                    </li>
                </ul>
            </footer>


        </>
    );
}
export default Fotter;