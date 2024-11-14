import { VscColorMode } from "react-icons/vsc"
import classNames from "classnames"
import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Transition,
} from "@headlessui/react"
import { MdOutlineWbSunny } from "react-icons/md"
import { LuMoonStar } from "react-icons/lu"
import { useState, useContext, Fragment } from "react"
import ThemeContext from "../../../store/context/ThemeContext"
import { THEME_LIGHT_ITEMS } from "../../../store/constants/navigation"
import { HiOutlineCheck } from "react-icons/hi"

const ThemePopover = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    
    return (
        <Popover className="relative rounded-lg bg-slate-400">
            {({ open }) => (
                <div>
                    <PopoverButton
                        className={classNames(
                            open
                                ? "bg-secondary text-secondary_bg"
                                : "bg-secondary_bg text-secondary",
                            "inline-flex items-center rounded-lg p-2 text-xl font-bold hover:bg-secondary hover:text-secondary_bg focus:outline-none",
                        )}
                    >
                        <VscColorMode />
                    </PopoverButton>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <PopoverPanel className="absolute right-0 z-10 mt-2.5 w-[375px]">
                            <div className="flex flex-col rounded-lg bg-base_bg shadow-[0_8px_10px_-5px_rgba(0,0,0,0.2),0_16px_24px_2px_rgba(0,0,0,0.14),0_6px_30px_5px_rgba(0,0,0,0.12)]">
                                <div className="flex w-full items-center justify-between border-b-[1.5px] border-bder p-4">
                                    <span className="text-sm font-semibold">
                                        THEME MODE
                                    </span>
                                    <div className="flex items-center">
                                        <button
                                            key={"light"}
                                            onClick={() =>
                                                setTheme({
                                                    ...theme,
                                                    mode: "light",
                                                })
                                            }
                                            className="me-3 flex h-12 w-12 items-center justify-center rounded-[4px] border-2 border-b border-secondary text-tertiary"
                                        >
                                            <MdOutlineWbSunny className="text-2xl" />
                                        </button>

                                        <button
                                            key={"dark"}
                                            onClick={() =>
                                                setTheme({
                                                    ...theme,
                                                    mode: "dark",
                                                })
                                            }
                                            className={`flex h-12 w-12 items-center justify-center rounded-[4px] border-2 border-txt bg-txt text-white`}
                                        >
                                            <LuMoonStar className="text-2xl" />
                                        </button>
                                    </div>
                                </div>

                                <div className="pt-5">
                                    <div className="px-4 pb-4">
                                        <div className="text-sm font-semibold">
                                            PRESENT COLOR
                                        </div>
                                        <div className="mt-2 flex w-full flex-wrap">
                                            {THEME_LIGHT_ITEMS.map((item) => (
                                                <div className="h-fit w-fit ps-3 pt-3">
                                                    <button
                                                        key={item.theme}
                                                        className={`flex h-12 w-12 items-center justify-center rounded-full opacity-90 ${item.mode} ${item.theme}`}
                                                        style={{
                                                            background: `linear-gradient(135deg, var(--color-primary) 50%, var(--color-secondary) 50%)`,
                                                        }}
                                                        onClick={() =>
                                                            setTheme({
                                                                ...theme,
                                                                theme: item.theme,
                                                            })
                                                        }
                                                    >
                                                        {theme.theme ===
                                                            item.theme && (
                                                            <HiOutlineCheck className="z-10 text-3xl text-base_bg" />
                                                        )}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </PopoverPanel>
                    </Transition>
                </div>
            )}
        </Popover>
    )
}

export default ThemePopover
