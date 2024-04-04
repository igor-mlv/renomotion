"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    fullName:
        z.string()
            .min(2, { message: 'Name must be at least 2 characters long' })
            .max(50, { message: 'Name must be at most 50 characters long' }),
    email:
        z.string()
            .email('Invalid email address'),
    phoneNumber:
        z.string()
            .min(10, { message: 'Phone number must be at least 10 numbers long' })
            .max(15, { message: 'Phone number must be at most 15 numbers long' })
            .regex(/^\d+$/, { message: 'Phone number must contain only numbers' }),
    address:
        z.string()
            .max(50, { message: 'Address must be at most 50 characters long' }),
    renovationType:
        z.string()
            .max(200, { message: 'Description must be at most 200 characters long' }),
})

export default function ContactUsForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
            address: "",
            renovationType: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <div className="bg-neutral-50/50 shadow-lg w-[370px] rounded-[40px]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-[20px] py-[40px] ">
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl >
                                    <Input className=" focus-visible:ring-gold h-[50px] text-[1.1rem]" placeholder="Full Name*" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl >
                                    <Input className=" focus-visible:ring-gold h-[50px] text-[1.1rem]" placeholder="Email*" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl >
                                    <Input className=" focus-visible:ring-gold h-[50px] text-[1.1rem]" placeholder="Phone number*" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl >
                                    <Input className=" focus-visible:ring-gold h-[50px] text-[1.1rem]" placeholder="Address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="renovationType"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl >
                                    <Textarea className=" focus-visible:ring-gold h-[100px] text-[1.1rem] placeholder:text-wrap placeholder:items-start placeholder:flex placeholder:justify-center" placeholder="Type of Renovation (e.g., Bathroom, Kitchen, Basement). Brief Description of Your Renovation Project" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        variant="ghost"
                        className="w-[150px] rounded-[20px] border-solid border-[1px] border-black hover:bg-inherit md:mt-[0px] mt-[10px] md:mb-0 mb-[25px] btnText hover:text-gold">
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    )
}