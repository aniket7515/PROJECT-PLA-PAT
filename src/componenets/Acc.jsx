import React from 'react';
import './Acc.css'

const Acc = () => {
  return (
    <div>
       <ul className="accordion">
  <li className="accordion-item">
    <input id="s1" className="hide" type="checkbox"/>
    <label for="s1"className="accordion-label">First</label>
    <ul className="accordion-child">
      <li>
        <label>
          <input type="checkbox"/> Item 1
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox"/> Item 2
        </label>
      </li>
   </ul>
  </li>
  <li className="accordion-item">
    <input id="s2" className="hide" type="checkbox" checked/>
    <label for="s2" className="accordion-label">Second</label>
    <p className="accordion-child">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ultrices nunc. Suspendisse a magna purus. In hac habitasse platea dictumst. Nullam sed nisl quis sem dignissim luctus. Etiam luctus mauris nulla, et efficitur massa efficitur ac.</p>
  </li>
</ul>
    </div>
  )
}

export default Acc