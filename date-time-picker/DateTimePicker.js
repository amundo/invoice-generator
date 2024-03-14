class DateTimePicker extends HTMLElement {
  constructor() {
    super()

    // Create the date and time input elements
    const dateInput = document.createElement("input")
    dateInput.type = "date"
    dateInput.addEventListener("input", () => this.updateValue())

    const timeInput = document.createElement("input")
    timeInput.type = "time"
    timeInput.addEventListener("input", () => this.updateValue())

    // Append them to the component
    this.appendChild(dateInput)
    this.appendChild(timeInput)

    this.dateInput = dateInput
    this.timeInput = timeInput
  }

  connectedCallback() {
    // Initialize with the attribute value or use current datetime
    const initialVal = this.getAttribute("value") ||
      new Date().toISOString().slice(0, 16)
    const [date, time] = initialVal.split("T")

    this.dateInput.value = date
    this.timeInput.value = time
  }

  updateValue() {
    const date = this.dateInput.value
    const time = this.timeInput.value

    if (date && time) {
      // Get the local time zone offset in minutes
      const offset = new Date().getTimezoneOffset()

      // Convert the time zone offset to the ISO 8601 format
      const offsetHours = Math.abs(Math.floor(offset / 60)).toString().padStart(
        2,
        "0",
      )
      const offsetMinutes = Math.abs(offset % 60).toString().padStart(2, "0")
      const sign = offset > 0 ? "-" : "+"

      // Create the ISO datetime string with time zone information
      this.setAttribute(
        "value",
        `${date}T${time}${sign}${offsetHours}:${offsetMinutes}`,
      )
    }
  }

  get value() {
    return this.getAttribute("value")
  }

  set value(val) {
    this.setAttribute("value", val)
    const [dateTime, timeZone] = val.split(/[+-]/)
    const [date, time] = dateTime.split("T")
    this.dateInput.value = date
    this.timeInput.value = time
  }
}

customElements.define("date-time-picker", DateTimePicker)

export { DateTimePicker }
