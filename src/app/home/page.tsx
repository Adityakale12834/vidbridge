import type { NextPage } from "next";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"

  
const Home:NextPage = () => {
    return(
        <>
        <ScrollArea className="h-[85vh] w-full">
            <Card className="m-2">
                <CardHeader>
                    <CardTitle>Aditya Kale</CardTitle>
                    <CardDescription>Video for Approval</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Title: The Fall of Indian Democracy in parliament of India</p>
                    <p>Description: </p>
                </CardContent>
                <CardFooter>Need an Approval in an hour</CardFooter>
            </Card>
            <Card className="m-2">
                <CardHeader>
                    <CardTitle>Aditya Kale</CardTitle>
                    <CardDescription>Video for Approval</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>The Fall of Indian Democracy in parliament of India</p>
                </CardContent>
                <CardFooter>Need an Approval in an hour</CardFooter>
            </Card>
            <Card className="m-2">
                <CardHeader>
                    <CardTitle>Aditya Kale</CardTitle>
                    <CardDescription>Video for Approval</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>The Fall of Indian Democracy in parliament of India</p>
                </CardContent>
                <CardFooter>Need an Approval in an hour</CardFooter>
            </Card>
            <Card className="m-2">
                <CardHeader>
                    <CardTitle>Aditya Kale</CardTitle>
                    <CardDescription>Video for Approval</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>The Fall of Indian Democracy in parliament of India</p>
                </CardContent>
                <CardFooter>Need an Approval in an hour</CardFooter>
            </Card>
            </ScrollArea>
        </>
    )
}
export default Home;