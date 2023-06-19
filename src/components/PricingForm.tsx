"use client";

import { Formik, Form, ErrorMessage, Field } from "formik";
import { useRouter } from "next/navigation";

const PricingForm = ({ tier }: { tier: string }) => {
  const router = useRouter();

    return (
        <div className="mt-12">
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    workEmail: "",
                    jobTitle: "",
                    phoneNumber: "",
                    companyName: "",
                    companySize: "",
                    additional: "",
                }}
                onSubmit={(values, { setSubmitting }) => {
                    fetch("https://formspree.io/f/moqzzgql", {
                        method: "POST",
                        body: JSON.stringify({
                            firstname: values.firstName,
                            lastname: values.lastName,
                            workEmail: values.workEmail,
                            jobTitle: values.jobTitle,
                            phoneNumber: values.phoneNumber,
                            companyName: values.companyName,
                            companySize: values.companySize,
                            additional: values.additional,
                            tier: tier,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log("Success:", data);
                            router.push("/pricing/success?name=" + values.firstName + " " + values.lastName);
                        });
                }}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <Form className="grid gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div className="">
                            <label
                                htmlFor="firstName"
                                className="block text-sm font-medium text-gray-700">
                                First Name *
                            </label>
                            <Field
                                required
                                type="text"
                                name="firstName"
                                className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:border-rose-500 focus:ring-rose-500"
                            />
                            <ErrorMessage name="firstName" component="div" />
                        </div>
                        <div>
                            <label
                                htmlFor="lastName"
                                className="block text-sm font-medium text-gray-700">
                                Last Name *
                            </label>
                            <Field
                                required
                                type="text"
                                name="lastName"
                                className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:border-rose-500 focus:ring-rose-500"
                            />
                            <ErrorMessage name="lastName" component="div" />
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="workEmail"
                                className="block text-sm font-medium text-gray-700">
                                Work Email *
                            </label>
                            <Field
                                required
                                type="email"
                                name="workEmail"
                                className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:border-rose-500 focus:ring-rose-500"
                            />
                            <ErrorMessage name="workEmail" component="div" />
                        </div>

                        <div>
                            <label
                                htmlFor="jobTitle"
                                className="block text-sm font-medium text-gray-700">
                                Job Title
                            </label>
                            <Field
                                type="text"
                                name="jobTitle"
                                className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:border-rose-500 focus:ring-rose-500"
                            />
                            <ErrorMessage name="jobTitle" component="div" />
                        </div>

                        <div>
                            <label
                                htmlFor="phoneNumber"
                                className="block text-sm font-medium text-gray-700">
                                Phone Number *{" "}
                            </label>
                            <Field
                                required
                                type="text"
                                name="phoneNumber"
                                className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:border-rose-500 focus:ring-rose-500"
                            />
                            <ErrorMessage name="phoneNumber" component="div" />
                        </div>

                        <div>
                            <label
                                htmlFor="companyName"
                                className="block text-sm font-medium text-gray-700">
                                Company Name *
                            </label>
                            <Field
                                required
                                type="text"
                                name="companyName"
                                className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:border-rose-500 focus:ring-rose-500"
                            />
                            <ErrorMessage name="companyName" component="div" />
                        </div>

                        <div>
                            <label
                                htmlFor="companySize"
                                className="block text-sm font-medium text-gray-700">
                                Company Size *
                            </label>
                            <Field
                                required
                                type="text"
                                name="companySize"
                                className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:border-rose-500 focus:ring-rose-500"
                            />
                            <ErrorMessage name="companySize" component="div" />
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="additional"
                                className="block text-sm font-medium text-gray-700">
                                How can our team help you?
                            </label>
                            <Field
                                as="textarea"
                                rows={4}
                                name="additional"
                                className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:border-rose-500 focus:ring-rose-500"
                            />
                            <ErrorMessage name="additional" component="div" />
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm sm:col-span-2 bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                            Let&apos;s talk
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default PricingForm;
