class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def start_engine(self):
        return f"The engine of {self.make} {self.model} is starting..."

    def drive(self):
        return f"{self.make} is moving."

    def __str__(self):
        return f"{self.year} {self.make} {self.model}"


class Car(Vehicle):
    def __init__(self, make, model, year, fuel_type):
        super().__init__(make, model, year)
        self.fuel_type = fuel_type


    def drive(self):
        return f"The {self.model} car is driving smoothly on the road."

    def refuel(self):
        return f"Refilling {self.fuel_type} tank."


class Motorcycle(Vehicle):
    def __init__(self, make, model, year, has_sidecar=False):
        super().__init__(make, model, year)
        self.has_sidecar = has_sidecar

    def drive(self):
        return f"The {self.model} motorcycle is weaving through traffic."

    def wheelie(self):
        return "Doing a wheelie! Be careful!"