import {Image} from "@nextui-org/image";
import {Card, CardBody} from "@nextui-org/card";
import {Avatar} from "@nextui-org/avatar";

import DefaultLayout from "@/layouts/default";
import {title} from "@/components/primitives";

export default function DocsPage() {
    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title()}>History Detail</h1>
                </div>

                <Image
                    alt="NextUI hero Image"
                    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                    width={300}
                />

                <Card>
                    <CardBody>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                    </CardBody>
                </Card>

                <div className="flex gap-3 items-center">
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
                    <Avatar name="Junior"/>
                </div>

                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
                <Avatar name="Jane"/>

                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d"/>
                <Avatar name="Joe"/>
            </section>
        </DefaultLayout>
    );
}
