# Protocol Buffers:

> “Protocol Buffers are a way of encoding structured data in an efficient yet extensible format.”

Google developed Protocol Buffers for use in their internal services. It is a binary encoding format that allows you to specify a schema for your data using a specification language, like so:

```message Person {
  required int32 id = 1;
  required string name = 2;
  optional string email = 3;
}
```
> “New fields could be easily introduced, and intermediate servers that didn’t need to inspect the data could simply parse it and pass through the data without needing to know about all the fields.”

### Why Protocol Buffers?

* Schemas Are Awesome
* Backward Compatibility For Free
* Less Boilerplate Code
* Validations and Extensibility
* Easy Language Interoperability

### When to use JSON?
* You need or want data to be human readable
* Data from the service is directly consumed by a web browser
* Your server side application is written in JavaScript
* You aren’t prepared to tie the data model to a schema
* You don’t have the bandwidth to add another tool to your arsenal
* The operational burden of running a different kind of network service is too great


## Running the code:

### Installation 
> Node.js

``` 
$ npm install protobufjs
```

```js 
var protobuf = require("protobufjs");
```

> Browsers

```<script src="//cdn.rawgit.com/dcodeIO/protobuf.js/6.X.X/dist/protobuf.js"></script>
<script src="//cdn.rawgit.com/dcodeIO/protobuf.js/6.X.X/dist/protobuf.min.js"></script>
```

## Code

``` 
package awesomepackage;
syntax = "proto3";

message AwesomeMessage {
    string awesome_field = 1; // becomes awesomeField
    int32 awesome_number = 2;
}
```
* The first line of the file specifies that you're using proto3 syntax: if you don't do this the protocol buffer compiler will assume you are using proto2. This must be the first non-empty, non-comment line of the file.

* The AwesomeMessage message definition specifies one field (name/value pairs), one for each piece of data that you want to include in this type of message. Each field has a name and a type.

* Each field in the message definition has a unique number. These field numbers are used to identify your fields in the message binary format, and should not be changed once your message type is in use. Note that field numbers in the range 1 through 15 take one byte to encode, including the field number and the field's type. 

* Field numbers in the range 16 through 2047 take two bytes. So you should reserve the numbers 1 through 15 for very frequently occurring message elements. Remember to leave some room for frequently occurring elements that might be added in the future.

* The smallest field number you can specify is 1, and the largest is 229 - 1, or 536,870,911. You also cannot use the numbers 19000 through 19999,(FieldDescriptor::kFirstReservedNumber through FieldDescriptor::kLastReservedNumber), as they are reserved for the Protocol Buffers implementation - the protocol buffer compiler will complain if you use one of these reserved numbers in your .proto.

## Specifying Field Rules

Message fields can be one of the following:

* singular: a well-formed message can have zero or one of this field (but not more than one).

* repeated: this field can be repeated any number of times (including zero) in a well-formed message. The order of the repeated values will be preserved.
In proto3, repeated fields of scalar numeric types use packed encoding by default.

## Adding Comments

* To add comments to your ```.proto``` files, use C/C++-style ```//``` and ```/* ... */``` syntax.




For More info on protocol buffers: 
[Google_Developers_Guide](https://developers.google.com/protocol-buffers/docs/proto3)