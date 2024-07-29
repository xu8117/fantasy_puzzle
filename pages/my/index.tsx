import {Avatar} from "@nextui-org/avatar";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import {AnchorIcon, MoonIcon, SunIcon} from "@nextui-org/shared-icons";

import {title} from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
    "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export default function DocsPage() {
    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title()}>My</h1>
                </div>

                <div className="flex gap-3 items-center">
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
                    <Avatar name="Junior"/>
                </div>

                <Accordion>
                    <AccordionItem
                        key="anchor"
                        aria-label="Anchor"
                        indicator={<AnchorIcon/>}
                        title="Anchor"
                    >
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem
                        key="moon"
                        aria-label="Moon"
                        indicator={<MoonIcon/>}
                        title="Moon"
                    >
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem
                        key="sun"
                        aria-label="Sun"
                        indicator={<SunIcon/>}
                        title="Sun"
                    >
                        {defaultContent}
                    </AccordionItem>
                </Accordion>
            </section>
        </DefaultLayout>
    );
}
