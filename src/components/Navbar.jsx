import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { HomeIcon, UserIcon, PresentationChartLineIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Home', Link: '/', icon: HomeIcon },
  { name: 'About', Link: '/about', icon: UserIcon },
  { name: 'Projects', Link: '/projects', icon: PresentationChartLineIcon },
  { name: 'Resume', Link: '/resume', icon: DocumentTextIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <Disclosure as="div">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex items-center sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:block">
                    <div className="flex space-x-1">
                      {navigation.map((item) => {
                        const isActive = location.pathname === item.Link;
                        return (
                          <NavLink
                            key={item.name}
                            to={item.Link}
                            className={classNames(
                              'relative px-4 py-2 text-sm font-medium transition-colors duration-300',
                              isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                            )}
                          >
                            <span className="relative z-10">{item.name}</span>
                            {isActive && (
                              <motion.div
                                layoutId="navbar-underline"
                                className="absolute inset-0 bg-white/10 rounded-lg -z-0"
                                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                              />
                            )}
                            {isActive && (
                              <motion.div
                                layoutId="navbar-glow"
                                className="absolute bottom-0 left-4 right-4 h-[2px] bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                              />
                            )}
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="font-mono text-2xl font-black text-gradient cursor-pointer"
                >
                  Mm.
                </motion.div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden bg-black/90 backdrop-blur-xl border-b border-white/10">
              <div className="space-y-1 px-4 pb-6 pt-4">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.Link;
                  return (
                    <NavLink
                      key={item.name}
                      to={item.Link}
                      className="block"
                    >
                      <Disclosure.Button
                        as="div"
                        className={classNames(
                          'px-4 py-3 rounded-lg text-lg font-bold transition-all',
                          isActive
                            ? 'bg-purple-600/20 text-white border border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.2)]'
                            : 'text-gray-400 hover:bg-white/5 hover:text-white'
                        )}
                      >
                        {item.name}
                      </Disclosure.Button>
                    </NavLink>
                  );
                })}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </motion.nav>
  );
}
