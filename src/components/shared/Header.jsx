import React, { Fragment } from "react"
import { HiOutlineSearch } from "react-icons/hi"
import { Transition } from "@headlessui/react"
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react"
import { FaDashcube } from "react-icons/fa6"
import classNames from "classnames"
import { Link, useNavigate } from "react-router-dom"
import { GoGear } from "react-icons/go"
import { RiUser3Line } from "react-icons/ri"
import { IoIosLogOut } from "react-icons/io"
import { DASHBOARD_HEADER_ITEMS } from "../../store/constants/navigation"

export default function Header() {
    const navigate = useNavigate()

    return (
        <div className="flex flex-none items-center bg-white p-4 pe-6 ps-6">
            <Link
                to="/"
                className="flex min-h-12 w-1/6 flex-row items-center text-xl"
            >
                <FaDashcube className="text-secondary" />
                <span className="ms-2 font-bold">ADMIN</span>
            </Link>

            <div className="flex flex-grow justify-between">
                {/* rgba(59,130,246,1) */}
                <div className="flex items-center rounded-md border border-bder-search bg-search_bg px-4 focus-within:border-transparent focus-within:shadow-[inset_0_0_0_1.5px_var(--color-secondary)]">
                    <HiOutlineSearch className="text-base text-search-icon font-thin" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="text-txt min-w-[434px] bg-transparent px-3.5 py-4 text-sm font-semibold focus:outline-none"
                    />
                </div>

                <div className="flex items-center gap-4">
                    {DASHBOARD_HEADER_ITEMS.map((item) => item.panel)}

                    <Menu as="div" className="relative inline-block text-left">
                        <MenuButton className="inline-flex rounded-full">
                            {({ active }) => (
                                <div className="">
                                    <span className="sr-only">
                                        Open user menu
                                    </span>
                                    <div
                                        className={classNames(
                                            active &&
                                                "shadow-[inset_0_0_0_1.5px_var(--color-secondary)]",
                                            "bg-secondary h-10 w-10 rounded-full bg-cover bg-center bg-no-repeat",
                                        )}
                                        style={{
                                            backgroundImage: `url("/src/data/GCr1vp0a0AAsuE0.jpg")`,
                                        }}
                                    >
                                        <span className="sr-only">
                                            Minewaku
                                        </span>
                                    </div>
                                </div>
                            )}
                        </MenuButton>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <MenuItems className="absolute right-0 z-10 mt-2 w-[330px] origin-top-right rounded-lg bg-white p-4 shadow-[0_8px_10px_-5px_rgba(0,0,0,0.2),0_16px_24px_2px_rgba(0,0,0,0.14),0_6px_30px_5px_rgba(0,0,0,0.12)] focus:outline-none">
                                <MenuItem>
                                    {({ active }) => (
                                        <div
                                            className={classNames(
                                                active &&
                                                    "bg-primary_bg text-primary",
                                                "mt-1 flex cursor-pointer items-center rounded-lg px-4 py-4 font-semibold text-gray-700 focus:bg-gray-200",
                                            )}
                                            onClick={() => navigate("/profile")}
                                        >
                                            <GoGear className="me-5 text-lg font-semibold" />
                                            Settings
                                        </div>
                                    )}
                                </MenuItem>

                                <MenuItem>
                                    {({ active }) => (
                                        <div
                                            className={classNames(
                                                active &&
                                                    "bg-primary_bg text-primary",
                                                "mt-1 flex cursor-pointer items-center rounded-lg px-4 py-4 font-semibold text-gray-700 focus:bg-gray-200",
                                            )}
                                            onClick={() => navigate("/profile")}
                                        >
                                            <RiUser3Line className="me-5 text-lg font-semibold" />
                                            Your profile
                                        </div>
                                    )}
                                </MenuItem>

                                <MenuItem>
                                    {({ active }) => (
                                        <div
                                            className={classNames(
                                                active &&
                                                    "bg-primary_bg text-primary",
                                                "mt-1 flex cursor-pointer items-center rounded-lg px-4 py-4 font-semibold text-gray-700 focus:bg-gray-200",
                                            )}
                                            onClick={() => navigate("/profile")}
                                        >
                                            <IoIosLogOut className="me-5 text-lg font-semibold" />
                                            Logout
                                        </div>
                                    )}
                                </MenuItem>
                            </MenuItems>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
    )
}
