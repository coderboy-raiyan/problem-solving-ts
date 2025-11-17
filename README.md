### What is the use of `enum` in TypeScript? Provide an example of a numeric and string enum ?

Enum মূলত কনস্ট্যান্ট হিসেবে ব্যবহার করা হয়। মানে ধরো, আমাদের যদি ইউজারদের রোল অ্যাসাইন করতে হয়—যেমন admin, student, faculty—এবং এগুলো আবার ভেরিফাইও করতে হয়। এই ক্ষেত্রে যেহেতু এই ভ্যালুগুলো পরিবর্তন হবে না, তাই আমরা এগুলোকে enum হিসেবে রাখতে পারি। নিচে উদাহরণ দেওয়া হলো:

```ts
enum Role = {
    admin = "admin",
    student = "student",
    faculty = "faculty"
}
```

এছাড়াও numeric enum আছে, যেটা স্বয়ংক্রিয়ভাবে সংখ্যা বাড়ায়। অর্থাৎ, যদি আমার ইউনিক নম্বরিক ভ্যালু নিয়ে কিছু করতে হয়—যেমন কিবোর্ডের দিক নির্দেশনা—তাহলে আমি খুব সহজে এটি ব্যবহার করতে পারি। নিচে একটি উদাহরণ দেওয়া হলো:

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
// or
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
```

দ্বিতীয় উদাহরণে যদি আমি স্পষ্টভাবে up = 1 বলে দিই, তাহলে বাকি মানগুলো সেই ক্রম অনুযায়ী বাড়তে থাকবে। না হলে গণনা ০ থেকে শুরু হবে।

---

### What are some differences between `interfaces` and `types` in TypeScript ?

দুই ক্ষেত্রেই interface এবং type প্রায় একইভাবে কাজ করে, কিন্তু একটি ছোট পার্থক্য আছে। Interface সাধারণত অবজেক্টের গঠন (object shapes) নির্ধারণ করতে ব্যবহার করা হয়। অন্যদিকে types অনেক বেশি flexible—union, intersection এবং আরও জটিল টাইপ ডিফিনিশন তৈরি করা যায়। আর সবচেয়ে ভালো দিক হলো, types খুবই সহজ: আমি চাইলে একটি type-এ শুধু একটি মানও অ্যাসাইন করতে পারি, কিন্তু interface-এ আমাকে অবশ্যই একটি অবজেক্টের গঠন নির্ধারণ করতে হয়। নিচে উদাহরণ দেওয়া হলো:

```ts
type Role = "admin" | "student";

interface Role {
  admin: "admin";
  student: "student";
}
```
