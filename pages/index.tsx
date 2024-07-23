import {Link} from "@nextui-org/link";
import {Snippet} from "@nextui-org/snippet";
import {Code} from "@nextui-org/code";
import {button as buttonStyles} from "@nextui-org/theme";
import {Card, CardHeader} from "@nextui-org/card";
import {Image} from "@nextui-org/image";


import {siteConfig} from "@/config/site";
import {subtitle, title} from "@/components/primitives";
import {GithubIcon} from "@/components/icons";
import DefaultLayout from "@/layouts/default";


export default function IndexPage() {
    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
                    <Card className="col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                            <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://nextui.org/images/card-example-4.jpeg"
                        />
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
                            <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://nextui.org/images/card-example-3.jpeg"
                        />
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
                            <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://nextui.org/images/card-example-2.jpeg"
                        />
                    </Card>
                </div>

                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title()}>Make&nbsp;</h1>
                    <h1 className={title({color: "violet"})}>beautiful&nbsp;</h1>
                    <br/>
                    <h1 className={title()}>
                        websites regardless of your design experience.
                    </h1>
                    <h4 className={subtitle({class: "mt-4"})}>
                        Beautiful, fast and modern React UI library.
                    </h4>
                </div>

                <div className="flex gap-3">
                    <Link
                        isExternal
                        className={buttonStyles({
                            color: "primary",
                            radius: "full",
                            variant: "shadow",
                        })}
                        href={siteConfig.links.docs}
                    >
                        Documentation
                    </Link>
                    <Link
                        isExternal
                        className={buttonStyles({variant: "bordered", radius: "full"})}
                        href={siteConfig.links.github}
                    >
                        <GithubIcon size={20}/>
                        GitHub
                    </Link>
                </div>

                <div className="mt-8">
                    <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
                <Code color="primary">pages/index.tsx</Code>
            </span>
                    </Snippet>
                </div>
            </section>
        </DefaultLayout>
    );
}
