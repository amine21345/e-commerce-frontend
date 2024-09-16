"use client";
import React from "react";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import Image from "next/image";
import logo from "@/public/SHOP.CO.svg";
import visa from "@/public/visa.svg";
import master from "@/public/master.svg";
import paypal from "@/public/paypal.svg";
import applepay from "@/public/applepay.svg";
import googlepay from "@/public/googlepay.svg";
import CustomGrid from "../custom/CustomGrid";

const Footer = () => {
  const form = useForm();
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="bg-black  w-[80vw] h-[15vh] rounded-lg flex items-center justify-between p-5">
        <h1 className="text-white font-bold text-5xl w-2/5">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <Form {...form}>
          <form className="grid gap-2 w-1/3">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your email address"
                      className="w-4/5 rounded-full"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-4/5 rounded-full bg-white text-black"
            >
              Subscribe to Newsletter
            </Button>
          </form>
        </Form>
      </div>
      <div className="w-[80vw] h-[25vh] rounded-lg flex items-center justify-between p-5">
        <CustomGrid custom={"gap-4 grid-cols-5"}>
          <CustomGrid custom={"gap-4 "}>
            <Image alt="" src={logo} />
            <p className="font-light text-sm">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <p className="font-light text-sm">ICONS</p>
          </CustomGrid>
          <CustomGrid custom={"gap-4 text-left"}>
            <h1 className="font-bold">Company</h1>
            <p>About</p>
            <p>Features</p>
            <p>works</p>
            <p>Career</p>
          </CustomGrid>
          <CustomGrid custom="gap-4 text-left">
            <h1 className="font-bold">Help</h1>
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </CustomGrid>
          {/* FAQ Section */}
          <CustomGrid custom="gap-4 text-left">
            <h1 className="font-bold">FAQ</h1>
            <p>Account</p>
            <p>Manage Deliveries</p>
            <p>Orders</p>
            <p>Payments</p>
          </CustomGrid>
          {/* Resources Section */}
          <CustomGrid custom="gap-4 text-left">
            <h1 className="font-bold">Resources</h1>
            <p>Free eBooks</p>
            <p>Development Tutorial</p>
            <p>How to - Blog</p>
            <p>YouTube Playlist</p>
          </CustomGrid>
        </CustomGrid>
      </div>
      <div className="border-t border-gray-300  w-[80vw] h-[10vh]  flex items-center justify-between p-5">
        <div className="text-sm text-gray-600">
          Shop.co © 2000-2023, All Rights Reserved
        </div>
        <div className="flex space-x-4">
          <Image src={visa} alt="Visa" className="h-14" />
          <Image src={master} alt="Mastercard" className="h-14" />
          <Image src={paypal} alt="PayPal" className="h-14" />
          <Image src={applepay} alt="Apple Pay" className="h-14" />
          <Image src={googlepay} alt="Google Pay" className="h-14" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
