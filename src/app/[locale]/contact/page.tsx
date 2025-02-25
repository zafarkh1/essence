import Contact from "@/components/pages/contact/Contact";
import Form from "@/components/pages/contact/Form";

const page = () => {
  return (
    <div className="contactContainer min-h-[calc(100vh-200px)] flex lg:flex-row flex-col lg:items-cente 2xl:gap-20 lg:gap-16 gap-8 2xl:py-16 py-8">
      <Contact />
      <Form />
    </div>
  );
};

export default page;
