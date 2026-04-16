import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";

export function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <motion.div whileHover={{ y: -6 }} className="card-soft overflow-hidden">
      <img
        src={service.image}
        alt={service.title}
        className="h-56 w-full object-cover"
      />
      <div className="space-y-4 p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose/10 text-rose">
          <Icon size={22} />
        </div>
        <h3 className="text-2xl font-semibold">{service.title}</h3>
        <p>{service.description}</p>
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            {service.price}
          </span>
          <button className="button-secondary">Explore Service</button>
        </div>
      </div>
    </motion.div>
  );
}

export function TeamCard({ member }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="card-soft p-5 text-center">
      <img
        src={member.image}
        alt={member.name}
        className="mx-auto h-72 w-full rounded-[1.5rem] object-cover"
      />
      <h3 className="mt-5 text-2xl font-semibold">{member.name}</h3>
      <p className="text-sm uppercase tracking-[0.2em] text-rose">
        {member.role}
      </p>
    </motion.div>
  );
}

export function BlogCard({ post }) {
  return (
    <motion.article whileHover={{ y: -5 }} className="card-soft overflow-hidden">
      <img src={post.image} alt={post.title} className="h-60 w-full object-cover" />
      <div className="space-y-3 p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-rose">{post.date}</p>
        <h3 className="text-2xl font-semibold">{post.title}</h3>
        <button className="button-secondary">Read Article</button>
      </div>
    </motion.article>
  );
}

export function ProductCard({ product }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="card-soft overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="h-64 w-full object-cover"
      />
      <div className="space-y-4 p-6">
        <h3 className="text-2xl font-semibold">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-rose">{product.price}</span>
          <span className="flex items-center gap-1 text-sm text-ink/70">
            <Star size={16} className="fill-rose text-rose" />
            {product.rating}
          </span>
        </div>
        <button className="button-primary w-full gap-2">
          <ShoppingBag size={16} />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}

export function PricingCard({ plan }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`rounded-[2rem] border p-8 shadow-soft backdrop-blur-xl ${
        plan.highlight
          ? "border-rose bg-rose text-white"
          : "border-white/60 bg-white/80"
      }`}
    >
      <p
        className={`text-sm uppercase tracking-[0.25em] ${
          plan.highlight ? "text-white/80" : "text-rose"
        }`}
      >
        {plan.name}
      </p>
      <h3 className="mt-4 text-4xl font-semibold">{plan.price}</h3>
      <p className={`mt-4 ${plan.highlight ? "text-white/85" : ""}`}>
        {plan.description}
      </p>
      <div className="my-8 h-px bg-current/15" />
      <div className="space-y-4">
        {plan.features.map((feature) => (
          <p key={feature} className={plan.highlight ? "text-white/90" : ""}>
            {feature}
          </p>
        ))}
      </div>
      <button
        className={`mt-8 w-full rounded-full px-6 py-3 text-sm font-semibold transition ${
          plan.highlight
            ? "bg-white text-rose hover:bg-ink hover:text-white"
            : "bg-ink text-white hover:bg-rose"
        }`}
      >
        Choose Package
      </button>
    </motion.div>
  );
}
