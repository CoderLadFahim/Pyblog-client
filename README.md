###### Phase 1: Create a frontend that makes use of every endpoint available in laravel-blog

    1. Create a figma mockup
        <!-- * Signup page -->
        <!--     * Should have a link to the login page -->
        <!-- * Login page -->
        <!--     * Should have a link to the signup page -->
        <!-- * Blogpost component (referring to the blogposts that have already been created) -->
            <!-- * Like btn -->
            <!-- * Dislike btn -->
            <!-- * author name -->
            <!-- * the title -->
            <!-- * the time of creation -->
            <!-- * a small muted peek of the body  -->
            <!-- * n of likes -->
            <!-- * n of dislikes -->
            <!-- * n of comments -->
        * Like/Dislike display modal
            * Should have two tabs for likes and dislikes
            * Show the users dp
            * Show the time of creation
            * Indicate whether or not its a like or a dislike even after separating with tabs
        * Blogpost list display
            * Search input
            * Filter input
                * by tags
                * by categories
        * Individual blogpost display
            * Comments display (Much like reddit posts)
                * Comments and their replies should also show likes and dislikes the same way as blogposts show theirs
                * Should show replies recursively like reddit
                * Comment input
                * Reply input

    2. Translate mockup into React code
        * Create the signup and login pages
        * Create the Blogpost component 
            * Redirect to the individual blogpost display page when clicked
            * Create the modal to show the Likes and Dislikes
            * Trigger Like/Dislike display modal when the respective UI element is clicked (must not conflict with the redirection click)
            * When users click on comment, they should be redirected to the individual blogpost and autoscrolled to the comment input
        * Show the blogpost list
            * Create the search bar UI
            * Create the necessary UI elements to show the tag and the category filter
            * Make the search and filtration work from the server side
            * Create the like dislike modal
                * Likes and dislikes must be paginated
                * New like/dislike records should be fetched on scroll
    <!-- And more -->

###### Phase 2: Implement groups and friendships
