import Image from "next/image";
import { Heart, User, CreditCard, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Component() {
  return (
    <div
      className="min-h-screen flex flex-col items-center py-2 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/assets/bg-Image.jpeg')` }}
    >
      <div className="bg-transparent rounded-lg p-4 md:p-8 max-w-7xl w-full mb-4 md:mb-8">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-4xl font-bold flex flex-col md:flex-row items-center justify-center gap-2 mb-2">
            <span className="text-4xl md:text-6xl font-bold md:mr-2">Try</span>
            <Image
              src="/assets/textimage.jpg"
              alt="image"
              width={300}
              height={300}
              className="w-full max-w-xs md:max-w-none md:w-auto mt-4"
            />
            <span className="text-3xl md:text-[50px] font-bold md:ml-4">
              for 14 Days
            </span>
          </h1>
          <p className="text-base md:text-lg lg:text-[22px] font-bold md:font-[900] mt-5">
            <span className="text-[#FF0000] text-xl md:text-2xl font-bold">
              Claim your 14-Day Trial Now
            </span>{" "}
            <span className="font-medium">to Find</span>{" "}
            <span className="font-bold">Breakouts & Setups</span>{" "}
            <span className="text-[#008000] font-semibold italic">
              In Real Time
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column: Form */}
          <div>
            <div className="mb-4 md:mb-6">
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-lg md:text-[20px] font-bold">
                  Your Package
                </h2>
                <h2 className="text-lg md:text-[20px] font-bold">Price</h2>
              </div>
              <hr />
              <div className="relative border-[2px] border-[#D4E1FF] rounded-md p-4 flex items-center justify-between with-overlay">
                <RadioGroup
                  defaultValue="trial"
                  className="flex items-center gap-2"
                >
                  <RadioGroupItem
                    value="trial"
                    id="trial"
                    className="border-blue-400 text-blue-400 data-[state=checked]:bg-blue-400 data-[state=checked]:border-blue-400"
                  />
                  <Label
                    htmlFor="trial"
                    className="text-sm md:text-base font-medium"
                  >
                    Breakouts & Setups 14-Day Trial
                  </Label>
                </RadioGroup>
                <span className="text-sm md:text-[16px] font-medium">$7</span>
              </div>
            </div>

            <div className="mb-4 md:mb-6">
              <h2 className="text-lg md:text-[20px] font-bold flex items-center gap-2">
                <User className="w-4 h-4 md:w-5 md:h-5 text-gray-900" /> Contact
                Information
              </h2>
              <div className="w-full bg-black h-[1.5px] md:h-[2.5px] mb-2 md:mb-3 my-1 md:my-2"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <Input
                  placeholder="Enter Your Full Name"
                  className="rounded-none border-0 border-b-2 border-gray-400 focus-visible:ring-0 h-10 md:h-[46px]"
                />

                <Input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="rounded-none border-0 border-b-2 border-gray-400 focus-visible:ring-0 h-10 md:h-[46px]"
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg md:text-[20px] font-bold flex items-center gap-2">
                    <CreditCard className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />{" "}
                    Payment Info
                  </h2>
                </div>
                <div className="flex items-center gap-2 mt-1 sm:mt-0 mb-1">
                  <Image
                    src="/assets/payment.jpeg"
                    alt="Payment methods"
                    width={150}
                    height={20}
                    className="h-5 md:h-6 object-contain"
                  />
                </div>
              </div>
              <div className="w-full bg-black h-[2px] md:h-[3px] mb-2 md:mb-3 my-1 md:my-2"></div>
              <Input
                placeholder="Credit Card Number"
                className="mb-3 md:mb-4 rounded-none border-0 border-b-2 border-gray-400 focus-visible:ring-0 h-10 md:h-[46px]"
              />
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <Input
                  placeholder="Expiry"
                  className="rounded-none border-0 border-b-2 border-gray-400 focus-visible:ring-0 h-10 md:h-[46px]"
                />

                <Input
                  placeholder="CVC Code"
                  className="rounded-none border-0 border-b-2 border-gray-400 focus-visible:ring-0 h-10 md:h-[46px]"
                />
              </div>
            </div>

            <div className="mb-4 md:mb-6 mt-4 md:mt-6">
              <div className="flex justify-between text-gray-600 font-semibold border-b pb-2 mb-2 text-sm md:text-base">
                <span>ITEM</span>
                <span>AMOUNT</span>
              </div>
              <div className="flex justify-between text-sm md:text-[16px] font-medium">
                <span>Breakouts & Setups 14-Day Trial</span>
                <span>$7</span>
              </div>
            </div>

            <div className="flex items-start gap-2 mb-4 md:mb-6">
              <Checkbox id="terms" className="mt-0.5 md:mt-1" />
              <Label
                htmlFor="terms"
                className="text-xs md:text-[15px] font-medium text-gray-600 leading-relaxed"
              >
                With my order today I get a 14-Day Trial to B&amp;S. If I
                don&apos;t cancel before my trial ends, I will be billed $99.00
                per month. I also agree to the Terms of Service and Privacy
                Policy.
              </Label>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 md:mb-8">
              <Image
                src="/assets/badge.png"
                alt="100% Money Back Guarantee"
                width={100}
                height={100}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-lg md:text-[20px] font-bold mb-1 md:mb-2">
                  100% MONEY BACK GUARANTEE
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  We're so confident that this is exactly what you need to get
                  from where you are to where you want to be, that we offer a
                  100% money back guarantee. If for some reason you aren't on
                  your way to real success in the first 30 days, email us and we
                  will take care of your refund!
                </p>
              </div>
            </div>

            <Button className="w-full bg-[#D71E46] hover:bg-red-700 text-white py-8 md:py-12 text-base md:text-[20px] font-bold rounded-md flex flex-col items-center leading-tight">
              Complete My Order Now!
              <span className="text-base md:text-[22px] font-medium">
                Join Breakouts & Setups Now!
              </span>
            </Button>
          </div>

          {/* Right Column: Benefits */}
          <div className=" mt-0 md:ml-28">
            <h2 className="text-xl md:text-[22px] font-bold mb-10 md:mb-20 text-center md:text-left text-gray-600 md:ml-9">
              Join Breakouts & Setups Now to Get:
            </h2>
            <div className="space-y-6">
              <Card className="!border-none !shadow-none bg-transparent flex items-center gap-4">
                <div className="">
                  <div className="flex justify-between sm:flex-row sm:items-center sm:justify-between mb-3 md:mb-0">
                    <div className="flex items-center gap-1.5 mb-1 sm:mb-0">
                      <Image
                        src="/assets/check.jpeg"
                        alt="check"
                        width={20}
                        height={20}
                      />
                      <span className="font-[700] text-base md:text-[18px]">
                        Unlimited Breakouts
                      </span>
                    </div>
                    <span className="text-lg md:text-[22px] font-medium line-through">
                      $49
                    </span>
                  </div>
                  <div className="bg-[#FDFDFD] border-[2px] border-gray-200 p-2 rounded-xl overflow-hidden !shadow-lg">
                    <Image
                      src="/assets/image1.jpeg"
                      width={400}
                      height={400}
                      alt="Breakout Alert Chart"
                      className="object-contain"
                    />
                  </div>
                </div>
              </Card>

              <Card className="!border-none !shadow-none bg-transparent flex items-center gap-4">
                <div>
                  <div className="flex flex-row justify-between sm:items-center sm:justify-between mb-3 md:mb-0">
                    <div className="flex items-center gap-1.5 mb-1 sm:mb-0">
                      <Image
                        src="/assets/check.jpeg"
                        alt="check"
                        width={20}
                        height={20}
                      />
                      <span className="font-bold text-base md:text-lg">
                        Unlimited Setups
                      </span>
                    </div>
                    <span className="text-lg md:text-[22px] font-medium line-through">
                      $25
                    </span>
                  </div>
                  <div className="shadow-lg border-[2px] border-gray-200 rounded-xl bg-[#FDFDFD] overflow-hidden">
                    <Image
                      src="/assets/image2.jpeg"
                      width={400}
                      height={400}
                      alt="Setup Alert Chart"
                      className="object-contain"
                    />
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center mt-6 md:mt-8">
              <p className="text-base md:text-lg text-gray-600">
                TOTAL VALUE: <span className="line-through">$99</span>
              </p>
              <p className="text-2xl md:text-[40px] font-bold text-zinc-800">
                TODAY ONLY: $7!
              </p>
              <p className="text-xl md:text-[40px] italic text-gray-700 font-medium">
                One-Time Payment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-50 w-full py-6 md:py-11 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-xs md:text-sm text-gray-600">
        <div className="flex flex-col sm:flex-row items-center gap-2 mb-4 md:mb-0">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/nobg-icon.png"
              alt="icon"
              width={54}
              height={54}
            />
            <span className="font-semibold">Breakouts & Setups</span>
          </div>
          <span className="text-xs text-gray-500 mt-1 sm:mt-0">
            Powered By Market Terminal
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center">
          <div className="flex gap-2 md:gap-4">
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
          <span>&copy; breakoutsandsetups. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
