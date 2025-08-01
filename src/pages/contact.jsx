import React from "react";

const ContactPage = () => {
  return (
    <main className="flex-grow flex pt-6 justify-center">
      <div className="flex flex-col justify-center px-20 mt-30 w-2xl h-60 pt-4 shadow">
        <h1 className="mb-4">Contact me</h1>
        <p className="text-lg">
          If you have any questions or would like to connect, you can reach me
          at{" "}
          <a
            href="mailto:scm.salifu@gmail.com"
            className="text-fuchsia-700 hover:underline font-bold"
          >
            scm.salifu@gmail.com
          </a>{" "}
          or on{" "}
          <a
            href="https://www.linkedin.com/in/stephanie-s-a7091854/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fuchsia-700 hover:underline font-bold"
          >
            {" "}
            LinkedIn
          </a>
          .
        </p>
      </div>
    </main>
  );
};

export default ContactPage;
