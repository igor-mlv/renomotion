"use client"
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { set, useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { formFieldsData } from "@/constants"

import Lottie from 'lottie-react';
import animationData from "@/lottie/submit-animation.json"

const formSchema = z.object({
    access_key: z.string(),
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
    const [formSubmitted, setFormSubmitted] = useState(false);
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            access_key: "7a53d9d5-482b-44af-b246-bbfeafb53bf5",
            fullName: "",
            email: "",
            phoneNumber: "",
            address: "",
            renovationType: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(data: z.infer<typeof formSchema>) {
        const formData = new FormData();

        Object.keys(data).forEach((key) => {
            formData.append(key, data[key as keyof typeof data]);
        });

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());

        if (res.success) {
            setFormSubmitted(true);
        } else {
            console.log("Error", res);
        }
        console.log(data)
    }
    interface FieldData {
        id: number;
        nameOfField: string;
        placeholder: string;
    }

    return (
        <div className="bg-neutral-50/50 shadow-lg w-[370px] rounded-[40px]">

            {formSubmitted ?
                (<div className="h-[540px] flex justify-center items-center bg-white rounded-[40px]">
                    <Lottie animationData={animationData} loop={false}
                    />
                </div>)
                :
                (
                    <Form {...form} >
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            encType="multipart/form-data"
                            className="space-y-6 px-[20px] py-[40px]">

                            {formFieldsData.map((fieldData: FieldData) => (
                                <FormField
                                    key={fieldData.id}
                                    control={form.control}
                                    name={fieldData.nameOfField as "fullName" | "email" | "phoneNumber" | "address" | "renovationType"}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    className="focus-visible:ring-gold h-[50px] text-[1.1rem]"
                                                    placeholder={fieldData.placeholder}
                                                    {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            ))}

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
                )}
        </div>
    )
}