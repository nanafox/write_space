# 🖊️ WriteSpace

WriteSpace is a simple yet powerful blog management system that gives every user their own space to write, share, and engage with ideas. Inspired by platforms like Hashnode, WriteSpace focuses on clean writing, user ownership, and community interaction.

---

## 🚀 Features

### ✍️ Blogging

* Users can **sign up/sign in** securely.
* Each user has a **personal dashboard** to manage their posts.
* **Create, edit, and delete** blog posts.
* Posts are scoped to the user (no one else can edit your posts).

### 💬 Engagement

* **Comment feature** - readers can leave comments on posts.
* **Like feature** - posts can be liked by other users.
* **Share feature** - posts can be shared via links (future: social integrations).

### 👤 User Dashboard

* Manage posts in one place.
* View post statistics (future feature: views, likes, comments).
* Clean, distraction-free editor.

### 🔐 Authentication & Authorization

* **Rodauth-Rails** for secure, flexible authentication.
* **Action Policy** for fine-grained authorization.
* Session-based authentication.
* Passwords securely hashed before storage.

---

## 🛠️ Tech Stack

* **Framework**: Ruby on Rails
* **Database**: PostgreSQL
* **Authentication**: [Rodauth-Rails](https://github.com/janko/rodauth-rails)
* **Authorization**: [Action Policy](https://actionpolicy.evilmartians.io/#/)
* **Deployment**: Heroku

---

## ⚡ Getting Started

### Prerequisites

* Ruby (3.4.4+ recommended)
* Rails (8.0.2.1 recommended, or later)
* PostgreSQL
* Bundler

### Setup

```bash
# Clone repo
git clone https://github.com/nanafox/write_space.git
cd write_space

# Install dependencies
bundle install

# Set up database
rails db:create db:migrate db:seed

# Start server
bin/dev
```

Visit: `http://localhost:3000` 🎉

---

## 🌱 Roadmap

* [ ] User authentication (Rodauth-Rails)
* [ ] Blog post management (CRUD)
* [ ] Comment system
* [ ] Like system
* [ ] Share links
* [ ] User profile pages
* [ ] Categories & tags
* [ ] Search & discovery
* [ ] Drafts & autosave
* [ ] Analytics (views, likes, comments)
* [ ] Social media integration

---

## 🚀 Deployment (Heroku)

```bash
# Login to Heroku
heroku login

# Create app
heroku create write_space

# Set environment variables
heroku config:set RAILS_MASTER_KEY=your-master-key
heroku config:set SECRET_KEY_BASE=your-secret-key
heroku config:set DATABASE_URL=your-database-url

# Push code
git push heroku main

# Run migrations
heroku run rails db:migrate
```

---

## 🔑 Environment Variables

The following environment variables should be set in production (e.g., on Heroku):

* `RAILS_MASTER_KEY` - Rails master key for decrypting credentials.
* `SECRET_KEY_BASE` - Secret key for verifying the integrity of signed cookies.
* `DATABASE_URL` - PostgreSQL database connection string.

---

## 🤝 Contributing

Contributions are welcome! Please fork the repo, create a branch, and open a pull request.

---

## 📜 License

MIT License - feel free to use, modify, and distribute.

---

## ✨ Inspiration

* **Hashnode** - Community-driven blogging
* **Medium** - clean writing experience
* **Ghost** - open-source publishing platform
