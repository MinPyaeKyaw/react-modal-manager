# Centralized React Modal Manager

This is a customizable modal component library for React.js. It provides a flexible API to manage and display modals in your application.

## Installation

To install the package, use npm:
`npm install react-modal-manager`

## Usage

### Import the Modal Provider

Wrap your application with the ModalProvider component to manage modals:

```
import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProvider } from 'react-modal-manager';

const App = () => {
  return (
    <ModalProvider>
      {/* Your application components */}
    </ModalProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

### Opening a Modal

Use the useModal hook to access modal management functions. To open a modal, call the open method with a unique ID and modal properties:

```
import React from 'react';
import { useModal } from 'react-modal-manager';

const MyComponent = () => {
  const { open } = useModal();

  const openMyModal = () => {
    open('my-modal', {
      content: <div>My Modal Content</div>,
      backdropOpacity: 0.5,
      fullscreen: false,
      position: 'center',
      animationType: 'fade',
    });
  };

  return <button onClick={openMyModal}>Open Modal</button>;
};

export default MyComponent;
```

### Closing a Modal

To close a specific modal, use the close method with the modal ID:

```
import React from 'react';
import { useModal } from 'react-modal-manager';

const MyComponent = () => {
  const { close } = useModal();

  const closeMyModal = () => {
    close('my-modal');
  };

  return <button onClick={closeMyModal}>Close Modal</button>;
};

export default MyComponent;
```

You can also close all open modals at once:

```
const { closeAll } = useModal();
closeAll();
```

## Modal Props

The ModalProps object allows you to customize the appearance and behavior of your modal. Here are the available options:

### ModalProps

| Prop                    | Type                                                                                                                                           | Description                                               |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| **content**             | `ReactNode`                                                                                                                                    | The content to be displayed inside the modal.             |
| **backdropOpacity**     | `number`                                                                                                                                       | The opacity of the backdrop.                              |
| **backdropColor**       | `string`                                                                                                                                       | The color of the backdrop.                                |
| **backdropPadding**     | `string` \| `number`                                                                                                                           | Padding around the modal content.                         |
| **fullscreen**          | `boolean`                                                                                                                                      | Whether the modal should cover the entire screen.         |
| **position**            | `center` \| `center-left` \| `center-right` \| `top-center` \| `top-left` \| `top-right` \| `bottom-center` \| `bottom-left` \| `bottom-right` | Position of the modal on the screen.                      |
| **hideOnClickBackDrop** | `boolean`                                                                                                                                      | Whether to close the modal when clicking on the backdrop. |
| **animationType**       | `fade` \| `zoom` \| `slide-from-top` \| `slide-from-bottom` \| `slide-from-right` \| `slide-from-left`                                         | The animation type for modal entrance and exit.           |

## Example

Here is a complete example of using the modal component:

```
import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProvider, useModal } from 'react-modal-manager';

const MyApp = () => {
  const { open } = useModal();

  const showModal = () => {
    open('example-modal', {
      content: <div>Example Modal Content</div>,
      fullscreen: false,
      animationType: 'zoom',
    });
  };

  return <button onClick={showModal}>Show Modal</button>;
};

ReactDOM.render(
  <ModalProvider>
    <MyApp />
  </ModalProvider>,
  document.getElementById('root')
);

```
