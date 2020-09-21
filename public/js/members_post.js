    $.get("/api/user_data").then(data => {
        $(".member-name").text(data.username);
    });

    $(".member-post").on("submit", addPost);

    const titleInput = $("#title")
    const restaurantInput = $("#restaurant")
    const categorySelect = $("#category")
    const reviewInput = $("#review")


    function addPost(event) {
        event.preventDefault();

        if (!titleInput.val().trim() || !restaurantInput.val().trim() || !categorySelect.val() || !reviewInput.val().trim()) {
            return;
        }

        const newRestaurant = {
            categoryId: categorySelect.val(),
            name: restaurantInput.val().trim()
        }

        $.post("/api/restaurants", newRestaurant)
            .then(createdRestaurant => {
                const newReview = {
                    body: reviewInput.val().trim()
                }

                return $.post(`/api/restaurants/${createdRestaurant.id}/reviews`, newReview);
            })
            .then(createdReview => {
                console.log(createdReview);
            });
    };

    $("#post-view").click(function () {
        window.location.replace("/members");
      });
