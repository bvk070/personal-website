import { ArrowUpRight, FileText } from "lucide-react";
import { blogs } from "@/lib/constants";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function Blog() {
  return (
    <Section
      id="blogs"
      title="Latest Blogs"
      subtitle="Thoughts on Android engineering, AI integration, and high-leverage team workflows."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {blogs.map((blog) => (
          <a
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <Card className="h-full">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-btn bg-gold/10 p-2">
                    <FileText size={18} className="text-gold" />
                  </div>
                  <h3 className="font-cal text-lg font-semibold leading-snug text-text-primary">
                    {blog.title}
                  </h3>
                </div>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-text-secondary transition-colors group-hover:text-gold"
                />
              </div>
              <p className="mt-4 text-sm text-text-secondary">Open PDF</p>
            </Card>
          </a>
        ))}
      </div>
    </Section>
  );
}
