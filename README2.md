- ✅ **Zero external dependencies**  
- ✅ **Ready for npm publication**

I have built the data table as a separate component **without any external dependencies**, so it can be used in any page with any data type. It is also designed to work seamlessly across different projects.

The implementation is highly flexible — every **table cell** and **table row** can handle any data type, and it also supports using **custom components** inside table cells for future enhancements.

To avoid prop drilling, I used the **Context API** to manage the data table state efficiently.

Currently, the styles are not highly customizable, but the structure and organization of the code make it **extremely compatible** for future custom styling.

As of now, I have implemented:
- 🔍 **Search**
- 🔃 **Sorting**

The architecture supports adding more features such as:
- 🧩 Filters  
- 📄 Pagination  
- 📐 Table layout configurations  

These can be integrated easily within the context itself.

> Took most of the reference from the **HeruUI (NectUI)** design system.

> To be honest I have used AI(claud) to help me with the initial design and implementation, but I have also spent a lot of time on the styling and architecture to make sure it is as flexible as possible.

> Also I have tried to keep thing in container/presentational design pattern, so that the logic is separated from the presentation. A container component handles the state and logic, while the presentational component focuses on the UI.
