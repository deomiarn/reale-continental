interface TeamMember {
  name: string;
  role: string;
  description: string;
}

interface Team4Props {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

const Team4 = ({ title, subtitle, members }: Team4Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-6 py-4 lg:py-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-[600px] text-lg">
            {subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-x-12 gap-y-16 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {members.map((member) => (
            <div key={member.name} className="group flex flex-col">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                alt={member.name}
                width={80}
                height={80}
                className="rounded-full object-contain"
              />
              <div className="mt-6 flex flex-col">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
                <p className="text-muted-foreground mt-4">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Team4 };
