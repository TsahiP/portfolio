import { UserConfig } from "@/lib/types/user.types";
import { ContactForm } from "./contact-form";
import { cn } from "@/lib/utils";
import SocialLinks from "@/components/social-links";
interface ContactProps {
  className?: string;
  user: UserConfig;
}

export function Contact({ className, user }: ContactProps) {
  
  return (
    <section
      id="contact"
      className={cn(
        "py-16 px-4 bg-gray-50 dark:bg-gray-900",
        className
      )}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. 
            Send me a message and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I&apos;m always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {user.contactInfo.email}
                  </p>
                </div>
              </div>
            </div>

            
           <div className="flex flex-row gap-4">
          <SocialLinks socialLinks={user?.socialLinks} />
            </div>
          </div> 

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
