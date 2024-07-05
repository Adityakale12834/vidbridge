"use client"
import "../globals.css"
import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import YouTubeIcon from '@mui/icons-material/YouTube';
import AddTaskIcon from '@mui/icons-material/AddTask';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import TagIcon from '@mui/icons-material/Tag';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const HomePage: NextPage = ({children} : {children:React.ReactNode}) => {
    const { setTheme } = useTheme();
    
    return (
      <div className="h-screen w-screen overflow-hidden">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl py-2 flex items-center font-medium px-4">
            <YouTubeIcon className="h-14 w-14" />
            <span>Vidbridge</span>
          </h1>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="mx-4">
              <Button variant="outline" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Separator className="" />
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full h-[85] overflow-hidden"
        >
          <ResizablePanel className="min-w-[5vw] max-w-[15vw]" defaultSize={15}>
            <div className="flex-col px-3 py-2 gap-y-2">
              <Button
                variant="outline"
                className="flex w-full items-center gap-2 font-medium justify-start my-1"
              >
                <WorkspacesIcon className="h-8 w-8" />
                <div>Collaborations</div>
              </Button>
              <Button
                variant="outline"
                className="flex w-full items-center gap-2 font-medium justify-start my-1"
              >
                <AddTaskIcon className="h-8 w-8" />
                <div>Approval</div>
              </Button>
              <Button className="flex w-full items-center gap-2 font-medium justify-start my-1">
                <SubscriptionsIcon className="h-8 w-8" />
                <div>Youtube</div>
              </Button>
              <Separator className="my-2" />
              <Button
                variant="outline"
                className="flex w-full items-center gap-2 font-medium justify-start my-1"
              >
                <TagIcon className="h-8 w-8" />
                <div>Youtube 1</div>
              </Button>
              <Button
                variant="outline"
                className="flex w-full items-center gap-2 font-medium justify-start my-1"
              >
                <TagIcon className="h-8 w-8" />
                <div>Youtube 2</div>
              </Button>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle className="h-[85vh]" />
          <ResizablePanel className="min-w-[30vw] h-[85vh]" defaultSize={50}>
            {children}
          </ResizablePanel>
          <ResizableHandle withHandle className="h-[85vh]" />
          <ResizablePanel className="min-w-[30vw] h-[85vh]" defaultSize={30}>
            <div className="p-4">
              <div className="flex justify-between my-4">
                <div className="flex gap-4 items-center">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex-col">
                    <p className="text-sm  leading-none my-1 font-bold">
                      Aditya kale
                    </p>
                    <p className="text-sm font-medium leading-none my-1">
                      email:co.2021.askale@bitwardha.ac.in
                    </p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">28-aug-2024</div>
              </div>
              <Separator />
              <div className="flex-col p-4 px-5">
                <input
                  id="input"
                  type="input"
                  className="w-full my-2 text-xl text-muted-foreground"
                  placeholder="Enter Title"
                  style={{ border: "none", outline: "none" }}
                />
                <input
                  id="input"
                  type="input"
                  className="w-full my-2 text-sm italic"
                  placeholder="Add Tags"
                  style={{ border: "none", outline: "none" }}
                />
                <input
                  id="input"
                  type="input"
                  className="w-full my-2 text-md"
                  placeholder="Add Description"
                  style={{ border: "none", outline: "none" }}
                />
                <Input id="video" type="file" className="w-[15vw]"/>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
        <Separator className="py-5" />
      </div>
    );
}
export default HomePage;