# Define your Computer class above the first_computer and second_computer methods.
class Computer
    def brand=(brand)
        @brand = brand
    end

    def screen_size=(screen_size)
        @screen_size = screen_size
    end

    def model_name=(model_name)
        @model_name = model_name
    end

    def model_year=(model_year)
        @model_year = model_year
    end

    def brand
        @brand
    end

    def screen_size
        @screen_size
    end

    def model_name
        @model_name
    end

    def model_year
        @model_year
    end

    def asleep
        @asleep
    end

    def sleep
        @asleep = true
    end

    def wake_up
        @asleep = false
    end

    def back_up  
        @last_backed_up_at = DateTime.now.strftime("on %m/%d/%y at %H:%M")
    end

    def about_this_computer
        "This computer is a #{@model_year} #{@brand} #{@model_name} with a #{@screen_size} inch screen. It was last backed up #{@last_backed_up_at}"
    end
end

# create and return the first computer within this method
def first_computer
  first_computer = Computer.new
  first_computer.brand = "Apple"
  first_computer.screen_size = 15.0
  first_computer.model_name = "Macbook Pro"
  first_computer.model_year = 2012
  first_computer
end

# create and return the second computer within this method
def second_computer
  second_computer = Computer.new
  second_computer.brand = "Apple"
  second_computer.screen_size = 24.0
  second_computer.model_name = "IMac"
  second_computer.model_year = 2012
  second_computer
end


