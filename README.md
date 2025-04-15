# OU One Two Mobile App

A comprehensive mobile application for University of Oklahoma students, providing easy access to academic information, campus resources, and university services.

## Documentation

### User Goals Analysis
The OU One Two app was designed with the following user goals in mind:
- **Quick Access to Information**: Students need immediate access to their academic information, class schedules, and campus resources
- **Simplified Navigation**: Reduce the number of clicks and screens needed to find important information
- **Personalized Experience**: Provide relevant information based on the student's academic status and preferences
- **Campus Integration**: Seamlessly connect students with campus resources and services
- **Academic Planning**: Help students track their progress and plan their academic journey

### Problems with Original UI
The current OU app suffers from several usability issues:
- **Complex Navigation**: Information is buried under multiple layers of menus
- **Inconsistent Design**: Lack of cohesive visual language across different sections
- **Poor Mobile Experience**: Not optimized for mobile devices, requiring excessive scrolling and zooming
- **Information Overload**: Important information is mixed with less relevant content
- **Slow Performance**: Long loading times and frequent crashes
- **Outdated Interface**: Visual design feels dated and doesn't follow modern mobile UI patterns

### Design Rationale
The OU One Two app addresses these issues through:
- **Intuitive Navigation**: Bottom navigation bar for quick access to main sections
- **Consistent Design Language**: Unified color scheme and component styling
- **Mobile-First Approach**: Optimized layouts for mobile devices
- **Information Hierarchy**: Clear organization of information with progressive disclosure
- **Performance Optimization**: Efficient data loading and caching
- **Modern UI Components**: Use of cards, modals, and interactive elements
- **Accessibility**: High contrast and clear typography for better readability
- **Responsive Feedback**: Visual and haptic feedback for user interactions

## Features

### Home View
The central hub of the application featuring:
- Weather widget with current conditions and forecast
- Quick access cards for important features
- Campus map section
- Profile and announcements access
- Navigation to all major sections

### Academics View
Organizes academic information into three main sections:
- **Schedule**: Weekly class schedule grouped by day
- **Grades**: Current courses with grades and credits
- **Assignments**: Upcoming and past due assignments
- Each section can be expanded for detailed information

### Degree View
Comprehensive academic journey tracking through four sections:
- **Academic Profile**: GPA and major details
- **Enrollment & Advising**: Current term information
- **Financials**: Balance and financial aid information
- **Graduation**: Progress toward degree completion

### Campus View
Interactive campus navigation featuring:
- Interactive map of the University of Oklahoma campus
- Comprehensive building directory
- Search functionality for buildings
- Filter by building type (academic, library, services, dining, recreation, residential)
- Building cards with names and types

### Other View
Centralized hub for university resources:
- Searchable directory of important links
- Academic resources
- Student services
- Campus activities
- Support services
- Settings for account preferences and notifications

## Modals

The application includes various modals for detailed information:

### Profile Modal
- Personal information display
- Student ID, major, class standing
- Expected graduation date
- Slides down from top of screen

### Announcements Modal
- University updates and notifications
- List of announcements with dates and times
- Campus events and deadlines

### Academic Profile Modal
- Academic performance details
- GPA, major, minor information
- Class standing and credits
- Transcript access

### Enrollment & Advising Modal
- Current term enrollment details
- Credit hours and enrollment status
- Academic advisor information
- Appointment scheduling

### Financial Details Modal
- Current balance and payment due date
- Financial aid information
- Scholarship details
- Payment history access

### Graduation & Degree Modal
- Graduation progress tracking
- Expected graduation date
- Degree progress percentage
- Requirements met and remaining

### Class Details Modal
- Comprehensive course information
- Instructor details
- Meeting times and locations
- Course description
- Grade breakdown (when applicable)

### Assignment Details Modal
- Assignment information
- Course name and due date
- Status tracking (upcoming/past due)

### Event Details Modal
- Academic event information
- Date, time, and location
- Event description

### Settings Modal
- Account preferences
- Personal information management
- Contact information
- Emergency contacts
- Address management

### Weather Modal
- Current weather conditions
- 5-day forecast for Norman, Oklahoma
- Temperature and conditions display

## Technical Details

- Built with React and TypeScript
- Responsive design for mobile devices
- Modern UI with OU's crimson color scheme (#841617)
- Interactive components with smooth animations
- Secure authentication system

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Access the application at `http://localhost:3000`
