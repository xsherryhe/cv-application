import { humanReadable } from "../utilities";

export default function Label({ name }) {
 return <label htmlFor={name}>{humanReadable(name)}</label>;
}
