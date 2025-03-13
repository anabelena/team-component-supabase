# Team Component with Supabase 🚀

## Description 📝

This project is a **Team Component** built using **Next.js** and **Supabase**. It showcases how to integrate a team member's information (such as name, role, and status) into a web component, utilizing Supabase as the backend for storing and managing the team members' data.

## Features 🛠️

- Display a list of team members.
- Uses Supabase for managing the database.
- Responsive layout for a seamless user experience on various screen sizes.

## Technologies Used 👩🏻‍💻

- **Next.js**: Frontend framework for building user interfaces.
- **Supabase**: Backend as a service (BaaS) for database management and file storage.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **JavaScript (ES6)**: Programming language for web development.

## Installation 💻

1. Clone the repository:

   ```bash
   git clone https://github.com/anabelena/team-component-supabase.git
   ```

2. Navigate to the project directory:

   ```bash
   cd team-component-supabase
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up Supabase:

   - Create a project on [Supabase](https://supabase.com/).
   - Set up your database schema and create a table for team members (with fields like `name`, `role`, and `status`).
   - Get your Supabase credentials (API URL and anon key) and add them to your `.env` file as follows:

     ```env
     REACT_APP_SUPABASE_URL=<your-supabase-url>
     REACT_APP_SUPABASE_ANON_KEY=<your-supabase-anon-key>
     ```

5. Run the development server:

   ```bash
   npm start
   ```

6. Visit the project in your browser at `http://localhost:3000`.

## Usage 💡

This component can be used to display team member details dynamically by fetching data from Supabase. The data is retrieved using the Supabase client. This makes it easy to manage and update the team members directly through Supabase's dashboard.

## Screenshots 📷

![Team Component Screenshot](https://smfyqeommefnkigxyivb.supabase.co/storage/v1/object/public/team-screenshots//team_home.png)
![Add New Member Screenshot](https://smfyqeommefnkigxyivb.supabase.co/storage/v1/object/public/team-screenshots//team_add_member.png)
![Update Role Screenshot](https://smfyqeommefnkigxyivb.supabase.co/storage/v1/object/public/team-screenshots//team_member_options.png)
![Member Options](https://smfyqeommefnkigxyivb.supabase.co/storage/v1/object/public/team-screenshots//team_options.png)
![Remove Member Screenshot](https://smfyqeommefnkigxyivb.supabase.co/storage/v1/object/public/team-screenshots//team_remove_member.png)

## Contributing 👇🏼

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.

## Contact 📧

You can find me on GitHub: [anabelena](https://github.com/anabelena)
