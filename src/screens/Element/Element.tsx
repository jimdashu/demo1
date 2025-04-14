import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Element = (): JSX.Element => {
  // Notification data
  const notifications = [
    "数据开发申请已经完成审批，请及时查看审批结果！",
    "请数据局完成数据资源申请审批！",
  ];

  // Subsystem data
  const subsystems = [
    {
      id: 1,
      name: "数据确权子系统",
      image: "https://c.animaapp.com/m9gl9se1jEjd0R/img/image-13.png",
      maskImage: "https://c.animaapp.com/m9gl9se1jEjd0R/img/mask-group.png",
      textColor: "text-[#2c2c2c]",
      hasGradient: false,
      hasIcon: false,
    },
    {
      id: 2,
      name: "审核监管子系统",
      image: "https://c.animaapp.com/m9gl9se1jEjd0R/img/image-14.png",
      maskImage: "https://c.animaapp.com/m9gl9se1jEjd0R/img/mask-group-1.png",
      textColor: "text-white",
      hasGradient: true,
      hasIcon: true,
    },
    {
      id: 3,
      name: "开发运营子系统",
      image: "https://c.animaapp.com/m9gl9se1jEjd0R/img/image-62.png",
      maskImage: "https://c.animaapp.com/m9gl9se1jEjd0R/img/mask-group-2.png",
      textColor: "text-[#2c2c2c]",
      hasGradient: false,
      hasIcon: false,
    },
    {
      id: 4,
      name: "流通交易子系统",
      image: "https://c.animaapp.com/m9gl9se1jEjd0R/img/image-16.png",
      maskImage: "https://c.animaapp.com/m9gl9se1jEjd0R/img/mask-group-3.png",
      textColor: "text-white",
      hasGradient: true,
      hasIcon: true,
    },
    {
      id: 5,
      name: "授权应用子系统",
      image: "https://c.animaapp.com/m9gl9se1jEjd0R/img/image-61.png",
      maskImage: "https://c.animaapp.com/m9gl9se1jEjd0R/img/mask-group-4.png",
      textColor: "text-[#2c2c2c]",
      hasGradient: false,
      hasIcon: false,
    },
    {
      id: 6,
      name: "安全保障子系统",
      image: "https://c.animaapp.com/m9gl9se1jEjd0R/img/image-15.png",
      maskImage: "https://c.animaapp.com/m9gl9se1jEjd0R/img/mask-group-5.png",
      textColor: "text-white",
      hasGradient: true,
      hasIcon: true,
    },
  ];

  return (
    <main className="bg-[#f0f2f5] flex flex-row justify-center w-full">
      <div className="bg-[#f0f2f5] w-[1920px] h-[1080px]">
        <div className="relative h-[1080px] bg-[url(https://c.animaapp.com/m9gl9se1jEjd0R/img/image-19.png)] bg-cover bg-[50%_50%]">
          {/* Header section */}
          <div className="absolute top-20 right-24 flex items-center space-x-4">
            <Badge className="h-7 px-4 py-0.5 bg-[#3295fc] rounded-[20px] hover:bg-[#3295fc]">
              <span className="[font-family:'PingFang_SC-Medium',Helvetica] font-medium text-white text-base">
                系统管理
              </span>
            </Badge>

            <span className="[font-family:'PingFang_SC-Semibold',Helvetica] font-normal text-neutral-800 text-base">
              你好，超级管理员
            </span>

            <img
              className="w-6 h-6"
              alt="Element"
              src="https://c.animaapp.com/m9gl9se1jEjd0R/img/----1--1.svg"
            />

            <ChevronDownIcon className="w-3.5 h-3.5 text-black" />
          </div>

          {/* Main content area */}
          <div className="absolute w-[1385px] h-[820px] top-[163px] left-[337px]">
            {/* Platform title image */}
            <img
              className="absolute w-[633px] h-[59px] top-[5px] left-[318px]"
              alt="Platform Title"
              src="https://c.animaapp.com/m9gl9se1jEjd0R/img/----------.png"
            />

            {/* Personal center button */}
            <div className="absolute w-60 h-[66px] top-[67px] left-[1085px]">
              <div className="relative w-[238px] h-[66px]">
                <Button className="absolute w-[235px] h-[51px] top-4 left-[3px] bg-[#0c6fff] rounded-[25.41px] flex items-center justify-between px-4">
                  <img
                    className="w-16 h-16 -mt-4 -ml-2"
                    alt="User Avatar"
                    src="https://c.animaapp.com/m9gl9se1jEjd0R/img/image-84.png"
                  />
                  <span className="[font-family:'PingFang_SC-Semibold',Helvetica] font-normal text-white text-[18.1px]">
                    进入个人中心
                  </span>
                  <img
                    className="w-[38px] h-[38px]"
                    alt="Enter Icon"
                    src="https://c.animaapp.com/m9gl9se1jEjd0R/img/image-55.png"
                  />
                </Button>
              </div>
            </div>

            {/* Notification card */}
            <Card className="absolute w-[750px] h-[168px] top-[166px] left-0 bg-[#f1f5fe78] rounded-[34.01px] shadow-[inset_4.53px_0px_4.53px_#dae6f6] border-none">
              <CardContent className="p-0">
                <div className="relative w-full h-full p-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-[45px] h-[45px] rounded-[22.67px] mr-4">
                        <div className="relative w-[37px] h-[34px] left-2">
                          <img
                            className="absolute w-[27px] h-6 top-2.5 left-0"
                            alt="Notification Icon"
                            src="https://c.animaapp.com/m9gl9se1jEjd0R/img/vector.svg"
                          />
                          <div className="absolute w-[11px] h-[11px] top-0 left-[26px] bg-[#d93025] rounded-[5.67px]" />
                        </div>
                      </div>
                      <h3 className="[font-family:'PingFang_SC-Semibold',Helvetica] font-normal text-[#3295fc] text-[18.1px]">
                        消息通知
                      </h3>
                    </div>
                    <span className="[font-family:'PingFang_SC-Semibold',Helvetica] font-normal text-[#3295fc] text-[18.1px]">
                      查看更多》
                    </span>
                  </div>

                  <div className="mt-8 space-y-4">
                    {notifications.map((notification, index) => (
                      <p
                        key={index}
                        className="[font-family:'PingFang_SC-Semibold',Helvetica] font-normal text-neutral-800 text-[18.1px]"
                      >
                        {notification}
                      </p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User role card */}
            <Card className="absolute w-[573px] h-[168px] top-[166px] left-[763px] bg-[#f1f5fe78] rounded-[34.01px] shadow-[inset_4.53px_0px_4.53px_#dae6f6] border-none">
              <CardContent className="p-0">
                <div className="relative w-full h-full p-6 flex justify-between">
                  <div className="flex flex-col">
                    <h3 className="[font-family:'PingFang_SC-Semibold',Helvetica] font-normal text-[#3295fc] text-[18.1px] mb-6">
                      您当前是：数据开发方
                    </h3>
                    <p className="w-[434px] [font-family:'PingFang_SC-Semibold',Helvetica] font-normal text-black text-[18.1px] mb-4">
                      我想成为&quot;数据开发方&quot;或&quot;场景开发方&quot;
                    </p>
                    <Button className="w-[117px] h-8 bg-[#3295fc] rounded-[22.67px] [font-family:'PingFang_SC-Medium',Helvetica] font-medium text-white text-[18.1px]">
                      立即申请
                    </Button>
                  </div>
                  <img
                    className="w-[153px] h-[153px]"
                    alt="Role Illustration"
                    src="https://c.animaapp.com/m9gl9se1jEjd0R/img/image-88.png"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Subsystem cards */}
            <div className="absolute w-[1357px] h-[455px] top-[365px] left-0 flex space-x-[10px]">
              {/* First card is wider */}
              <Card className="w-[333px] h-[455px] bg-white rounded-[10.2px] border-none relative">
                <CardContent className="p-0">
                  <img
                    className="w-[321px] h-[449px] absolute top-[3px] left-1.5"
                    alt="Mask group"
                    src={subsystems[0].maskImage}
                  />
                  <img
                    className="w-[315px] h-[282px] absolute top-4 left-1.5 object-cover"
                    alt="Subsystem illustration"
                    src={subsystems[0].image}
                  />
                  <div
                    className={`absolute top-[366px] left-[75px] [font-family:'FZZhengHeiS-EB-GB-Regular',Helvetica] font-normal ${subsystems[0].textColor} text-[22.7px] tracking-[3.97px] leading-[normal]`}
                  >
                    {subsystems[0].name}
                  </div>
                </CardContent>
              </Card>

              {/* Remaining 5 cards with equal width */}
              {subsystems.slice(1).map((subsystem) => (
                <Card
                  key={subsystem.id}
                  className="w-[190px] h-[455px] bg-white rounded-[10.2px] border-none relative"
                >
                  <CardContent className="p-0">
                    <img
                      className="h-[446px] absolute w-[179px] top-1.5 left-[5px]"
                      alt="Mask group"
                      src={subsystem.maskImage}
                    />
                    {subsystem.hasGradient && (
                      <div className="absolute w-[178px] h-[444px] top-1.5 left-[5px] rounded-[12.47px] [background:linear-gradient(180deg,rgba(119,195,255,0.06)_0%,rgba(137,185,255,1)_79%,rgba(0,104,255,1)_100%)]" />
                    )}
                    <img
                      className="absolute w-[225px] h-[202px] top-20 left-[-20px] object-cover"
                      alt="Subsystem illustration"
                      src={subsystem.image}
                    />
                    <div
                      className={`absolute top-[364px] left-[${subsystem.id === 2 ? "365" : subsystem.id === 3 ? "565" : subsystem.id === 4 ? "767" : subsystem.id === 5 ? "966" : "1167"}px] [font-family:'FZZhengHeiS-EB-GB-Regular',Helvetica] font-normal ${subsystem.textColor} text-[18.1px] tracking-[3.17px] leading-[normal]`}
                    >
                      {subsystem.name}
                    </div>
                    {subsystem.hasIcon && (
                      <img
                        className="absolute w-[29px] h-[29px] top-[405px] left-[${subsystem.id === 2 ? '424' : subsystem.id === 4 ? '828' : '1232'}px]"
                        alt="Vector"
                        src="https://c.animaapp.com/m9gl9se1jEjd0R/img/vector-1.svg"
                      />
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
