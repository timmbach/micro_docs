"use client";

import Image from "next/image";
import React from "react";
import LogoImg from "../../public/logo/minidocs-logo.png";
import * as Popover from "@radix-ui/react-popover";
import Link from "next/link";
import Search from "./Search";

export default function Header() {
  return (
    <nav className="p-4 mx-auto navbar_nav ">
      <div className="navbar_nav__links ">
        <Link href="/">
          <Image src={LogoImg} width={100} height={50} alt="minidocs logo" />
        </Link>
      </div>
      <div className="navbar_buttons">
        <Search />
        <Popover.Root>
          <Popover.Trigger className="navbar_feedback">
            <span>Feedback</span>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              className="feedback_popper"
              style={{ zIndex: "100" }}
            >
              <div className="feedback_popperChild" tabIndex={-1}>
                <div>
                  <form>
                    <div className="feedback_formWrapper">
                      <div className="feedback_inputWrapper">
                        <input
                          aria-labelledby="E-mail"
                          placeholder="Email Address"
                          type="email"
                          aria-invalid="false"
                          autoCapitalize="none"
                          autoComplete="off"
                          autoCorrect="off"
                          className="feedback_inputEmail"
                        />
                      </div>
                      <textarea
                        className="feedback_textMessage"
                        placeholder="Your feedback..."
                      ></textarea>
                    </div>
                    <div className="feedback_actions">
                      <button
                        type="submit"
                        className="feedback_actions__button"
                      >
                        <span className="feedback_actions__content">Send</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </nav>
  );
}
