# 📱 Mizan Academy IQ - PWA Files

## 📁 هيكل المجلدات:

```
mizaniq-pwa/
├── manifest.json          ✅ بيانات التطبيق
├── service-worker.js      ✅ للأداء والـ offline
├── index.html             ✅ الصفحة الرئيسية
├── images/                📁 مجلد الصور والأيقونات
│   ├── icon-192.png       (أضفها بنفسك)
│   ├── icon-512.png       (أضفها بنفسك)
│   └── ...
└── README.md              📄 هذا الملف
```

---

## ⚙️ خطوات التثبيت على GitHub Pages:

### 1. اذهب لـ GitHub
```
https://github.com
```

### 2. أنشئ Repository جديد
- اسم: `mizaniq`
- اختر `Public`

### 3. حمل كل الملفات من مجلد `mizaniq-pwa/`:
```
✅ manifest.json
✅ service-worker.js
✅ index.html
✅ images/ (مجلد)
```

### 4. اذهب للـ Settings → Pages
- اختر `main` branch
- اضغط `Save`

### 5. انتظر دقيقة...
الموقع سيكون متاح على:
```
https://your-username.github.io/mizaniq/
```

---

## 🎨 إضافة الأيقونات:

أنت تحتاج **صور PNG** بهذه الأحجام:

1. **icon-192.png** (192×192 بكسل)
2. **icon-512.png** (512×512 بكسل)
3. **icon-maskable-192.png** (لـ Android)
4. **icon-maskable-512.png** (لـ Android)
5. **screenshot-192.png** (صورة من التطبيق)
6. **screenshot-512.png** (صورة من التطبيق)

### كيفية إنشاء الأيقونات:

**الخيار 1: استخدم PWA Image Generator (الأسهل)**
```
https://www.pwabuilder.com/
```
- أنسخ شعار Mizan
- أختر الحجم والألوان
- حمل كل الصور

**الخيار 2: استخدم Canva أو Figma**
- ادخل صورة قاعدة
- صدّر بأحجام مختلفة

**الخيار 3: استخدم Adobe Express (مجاني)**
```
https://www.express.adobe.com/
```

---

## 🔧 تعديل الملفات:

### تغيير اسم التطبيق:
**في `manifest.json`:**
```json
"name": "Mizan Academy IQ",
"short_name": "Mizan"
```

### تغيير الألوان:
**في `manifest.json`:**
```json
"theme_color": "#d4af37",      // الذهبي
"background_color": "#1a1a2e"  // الأسود
```

### تغيير محتوى الصفحة:
**في `index.html`:**
- عدّل النصوص
- أضف محتويات جديدة
- غيّر الـ HTML حسب احتياجك

---

## 🌐 ربط مع Google Sites:

بعد ما تحمل على GitHub Pages:

1. افتح Google Sites
2. اضغط `+` (Insert)
3. اختر `HTML box`
4. ضع هذا الكود:

```html
<iframe 
  src="https://YOUR-USERNAME.github.io/mizaniq/" 
  width="100%" 
  height="700px" 
  style="border: none; border-radius: 10px;">
</iframe>
```

**استبدل `YOUR-USERNAME` باسم حسابك على GitHub**

---

## 📱 تثبيت التطبيق:

**على Android:**
1. افتح الموقع في Chrome
2. اضغط ⋮ (القائمة)
3. اختر "Install app"

**على iPhone:**
1. افتح في Safari
2. اضغط مشاركة (Share)
3. "Add to Home Screen"

---

## 🔄 تحديث الملفات:

1. في GitHub، اختر الملف
2. اضغط ✏️ (Edit)
3. عدّل الكود
4. اضغط `Commit changes`
5. بعد دقيقة، التحديث يظهر تلقائياً

---

## 🎯 ملخص سريع:

- ✅ هذا مشروع PWA كامل
- ✅ جاهز للتثبيت على GitHub Pages
- ✅ مع Dark مع ذهبي
- ✅ بدون الحاجة لخادم مدفوع
- ✅ يعمل كتطبيق حقيقي

---

## 💡 نصائح:

1. **اسم Repository يجب يكون lowercase** (صغير)
2. **الصور PNG فقط** (بدون JPG)
3. **أنتظر 5 دقائق** بعد upload الأول
4. **اختبر في Chrome على الموبايل**
5. **استخدم Lighthouse** (في DevTools) لفحص الأداء

---

## 🚀 الخطوات التالية:

- ✅ أضف محتوى تعليمي
- ✅ ربط قاعدة بيانات (Firebase)
- ✅ أضف ميزات إضافية
- ✅ تحسين الأداء

---

**نسخة:** 1.0  
**آخر تحديث:** مارس 2026  
**الحالة:** جاهز للاستخدام ✅
