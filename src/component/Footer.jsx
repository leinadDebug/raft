import React from "react";
import { AppleIcon, PlayStore, QRcode, RaftLogo } from "../assets";

function Footer() {
  return (
    <div className="lg:m-20 m-10 mt-24 text-white">
      <div className="pb-10 border-b-2 border-slate-500 ">
        <img src="src\assets\Frame 3.png" className=" lg:max-w-xs w-44 " />
      </div>
      <div className="my-11 flex lg:flex-row flex-col gap-9 justify-between">
        <div className="p-5 flex gap-4 text-white text-xl outline-dashed outline-4 outline-offset-8 border-slate-500 border-2 flex-none w-fit ">
          <img src="src/assets/QR_code_for_mobile_English_Wikipedia 1.png" className="lg:w-[10%] w-32 h-fit  "/>
          <div className="flex flex-col gap-3">
            <h3 className="">
              Scan to download App on the playstore and Appstore{" "}
            </h3>
            <div className="flex gap-3">
              <PlayStore />
              <AppleIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-row lg:justify-around gap-y-6 gap-x-32 flex-wrap text-lg">
          <ul>
            <h1 className="font-semibold pb-3">About us</h1>
            <li>Our Company</li>
            <li>Careers</li>
            <li>Press kits</li>
          </ul>
          <ul>
            <h1 className="font-semibold pb-3">Legal</h1>
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>About us</li>
          </ul>
          <ul>
            <h1 className="font-semibold pb-3">Support</h1>
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between pt-16">
        <select className="text-white bg-black ">
          <option>English (United Kingdom)</option>
          <option>Cameroon</option>
          <option>Africa</option>
          <option>Europe</option>
          <option>Antarctica</option>
          <option>Asia</option>
          <option>Australia</option>
        </select>
        <h1>&copy; Raft Corp, LLC</h1>
      </div>
    </div>
  );
}

export default Footer;
