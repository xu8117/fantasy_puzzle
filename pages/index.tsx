import {Card, CardHeader} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {Button} from "@nextui-org/button";
import {Slider} from "@nextui-org/slider";

import DefaultLayout from "@/layouts/default";
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/modal";
import {Input} from "@nextui-org/input";
import {LockIcon, MailIcon} from "@/components/icons";

const divData = Array.from({length: 9}, (_, index) => `${index + 1}`);


export default function IndexPage() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
      <DefaultLayout>
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
            <Card className="col-span-12 sm:col-span-4 h-[120px]">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  What to watch
                </p>
                <h4 className="text-white font-medium text-large">
                  Stream the Acme event
                </h4>
              </CardHeader>
              <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="https://nextui.org/images/card-example-4.jpeg"
              />
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[120px]">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  Plant a tree
                </p>
                <h4 className="text-white font-medium text-large">
                  Contribute to the planet
                </h4>
              </CardHeader>
              <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="https://nextui.org/images/card-example-3.jpeg"
              />
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[120px]">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  Supercharged
                </p>
                <h4 className="text-white font-medium text-large">
                  Creates beauty like a beast
                </h4>
              </CardHeader>
              <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="https://nextui.org/images/card-example-2.jpeg"
              />
            </Card>
          </div>

          <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
            {divData.map((item, index) => (
                <Card isPressable onPress={onOpen} key={index} className="col-span-12 sm:col-span-4 h-[120px]">
                  <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny uppercase font-bold text-black">
                      What to watch {item}
                    </p>
                    <h4 className="text-black font-medium text-large">
                      Stream the Acme event {index}
                    </h4>
                  </CardHeader>
                  <Image removeWrapper alt="Card background"/>
                </Card>
            ))}
          </div>

          {/*<CircularProgress aria-label="Loading..."/>*/}

          {/*<div className="flex w-full flex-col">
            <Tabs aria-label="Options">
              <Tab key="photos" title="Photos">
                <Card>
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="music" title="Music">
                <Card>
                  <CardBody>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="videos" title="Videos">
                <Card>
                  <CardBody>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum.
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>*/}

          <Slider
              className="max-w-md"
              color="foreground"
              defaultValue={1}
              label="Temperature"
              maxValue={10}
              minValue={1}
              showSteps={true}
              size="md"
              step={1}
          />
          <Button color="primary" onClick={onOpen}>Betting</Button>

          <Button color="primary" onClick={onOpen}>New Lottery</Button>
        </section>
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                  <ModalBody>
                    <Input
                        autoFocus
                        endContent={
                          <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
                        }
                        label="Round"
                        type="number"
                        placeholder="Enter your email"
                        variant="bordered"
                    />
                    <Input
                        endContent={
                          <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
                        }
                        label="TicketPrice"
                        placeholder="Enter your password"
                        type="number"
                        variant="bordered"
                    />
                    <Input
                        endContent={
                          <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
                        }
                        label="lotteryDuration"
                        placeholder="Enter your password"
                        type="number"
                        variant="bordered"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="flat" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Start
                    </Button>
                  </ModalFooter>
                </>
            )}
          </ModalContent>
        </Modal>
      </DefaultLayout>
  );
}
