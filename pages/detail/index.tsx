import {Image} from "@nextui-org/image";
import {Textarea} from "@nextui-org/input";
import {Button} from "@nextui-org/button";

import {title} from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title()}>Detail</h1>
                </div>

                <Image
                    alt="NextUI hero Image"
                    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                    width={300}
                />

                <Textarea
                    isDisabled
                    className="max-w-xs"
                    defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter your description"
                />

                <Textarea
                    isDisabled
                    className="min-w-xs"
                    defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter your description"
                />

                <Textarea
                    isDisabled
                    className="min-w-xs"
                    defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter your description"
                />

                <Button>Book Now</Button>
            </section>
        </DefaultLayout>
    );
}
