import Contact from "@/components/pages/contact/Contact";
import Form from "@/components/pages/contact/Form";

const page = () => {
  return (
    <div className="myContainer flex lg:flex-row flex-col 2xl:gap-20 lg:gap-16 gap-8 2xl:py-16 py-6">
      <Contact />
      <Form />
    </div>
  );
};

export default page;
