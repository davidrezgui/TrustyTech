📄 README.md - التوثيق الكامل لمشروع "مدينتنا نظيفة"

```markdown
# 🌍 مدينتنا نظيفة (M-Ville Propre)

![Version](https://img.shields.io/badge/version-1.0.0-green)
![Status](https://img.shields.io/badge/status-MVP%20Ready-brightgreen)
![Database](https://img.shields.io/badge/database-Supabase%20PostgreSQL-blue)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

## 📋 المقدمة

**مدينتنا نظيفة** هي منصة وطنية رقمية جزائرية متكاملة لإدارة **الاقتصاد الأخضر**. تهدف المنصة إلى رقمنة قطاع النظافة وتثمين النفايات القابلة للتدوير (خاصة الكرتون والبلاستيك) من خلال ربط خمس فئات رئيسية: **المواطن**، **التاجر**، **السائق**، **المشرف**، و**شركات التدوير** في منصة واحدة موحدة.

تم تطوير المنصة كحل لمشكلة النقاط السوداء (المفرغات العشوائية) وعدم انتظام مواعيد جمع النفايات، مع تقديم نظام تحفيزي للمواطنين والتجار للمشاركة في الفرز من المصدر.

**المرحلة الأولى من المشروع تستهدف ولاية برج بوعريريج.**

---

## 🎯 الأهداف الاستراتيجية

| الهدف | الوصف |
|-------|-------|
| 🏙️ **بيئة نظيفة** | القضاء على النقاط السوداء والمفرغات العشوائية |
| 👷 **مناصب شغل** | خلق فرص عمل تقنية (مبرمجين، مشرفين) وميدانية (سائقين، جامعين) |
| ♻️ **اقتصاد دائري** | تحويل النفايات (كرتون، بلاستيك، زجاج) إلى مواد أولية وإعادة تدويرها |
| 📊 **الشفافية الرقمية** | تتبع كل كيلوغرام من النفايات من المصدر إلى مركز الرسكلة |
| 🌱 **تتبع البصمة الكربونية** | حساب كمية انبعاثات CO₂ التي تم توفيرها من خلال تحسين المسارات |

---

## 🛠️ التقنيات المستخدمة

### Frontend (واجهة المستخدم)
| التقنية | الاستخدام |
|---------|-----------|
| **HTML5** | هيكل الصفحات |
| **CSS3** | التصميم والتنسيقات (متغيرات، Grid، Flexbox، Animations) |
| **JavaScript (Vanilla)** | المنطق البرمجي والتفاعلات |
| **Chart.js** | الرسوم البيانية والمخططات التفاعلية |
| **Leaflet.js** | الخرائط التفاعلية مفتوحة المصدر |
| **Google Fonts (Cairo)** | الخط العربي المستخدم في كامل المنصة |

### Backend & Database
| التقنية | الاستخدام |
|---------|-----------|
| **Supabase** | منصة Backend-as-a-Service (BaaS) |
| **PostgreSQL** | قاعدة البيانات الأساسية |
| **Supabase Auth** | نظام المصادقة وتسجيل المستخدمين |
| **Supabase Storage** | تخزين الصور والملفات |
| **Supabase REST API** | واجهة برمجة التطبيقات للتواصل بين frontend و backend |

### APIs خارجية
| API | الاستخدام |
|-----|-----------|
| **Google Maps API** | فتح تطبيق الخرائط للملاحة (في واجهة السائق) |
| **OpenStreetMap (Leaflet)** | عرض الخرائط التفاعلية في لوحة التحكم |

---

## 👥 فئات المستخدمين

| # | الفئة | الوصف | الصفحات المستخدمة |
|---|-------|-------|-------------------|
| 1 | **المواطن** | أي شخص يريد الإبلاغ عن مفرغة عشوائية | index, report, notifications, schedule |
| 2 | **التاجر** | صاحب محل تجاري يريد جمع الكرتون/البلاستيك وكسب النقاط | home, sort, notifications |
| 3 | **السائق** | موظف يجمع النفايات ويؤكد المهام | driver |
| 4 | **المشرف** | مدير المنصة يراقب كل العمليات | dashboard |
| 5 | **شركة التدوير** | شركة خارجية تشتري المواد المجمعة | company |

---

## 🗂️ هيكل المنصة (12 صفحة)

```

📁 school-/
│
├── 📄 index.html              ← الصفحة الرئيسية (بوابة الخدمات)
├── 📄 login.html              ← تسجيل الدخول وإنشاء الحسابات
├── 📄 reset.html              ← استعادة كلمة المرور المنسية
├── 📄 home.html               ← لوحة تحكم المستخدم المسجل
├── 📄 report.html             ← نظام التبليغ الجغرافي (SIG)
├── 📄 sort.html               ← طلب جمع المواد + نظام النقاط
├── 📄 driver.html             ← واجهة السائق (مهام + ملاحة + تأكيد)
├── 📄 dashboard.html          ← لوحة تحكم الإدارة (8 تبويبات)
├── 📄 company.html            ← واجهة شركات التدوير (عروض الشراء)
├── 📄 schedule.html           ← جدول مواعيد جمع النفايات
├── 📄 invoice.html            ← صفحة الفاتورة الرسمية للطباعة
├── 📄 notifications.html      ← مركز الإشعارات والتنبيهات
│
└── 📄 README.md               ← هذا الملف

```

---

## 📄 وصف تفصيلي لكل صفحة

### 1. index.html (الصفحة الرئيسية)
- **المستخدم:** جميع الفئات
- **الوظيفة:** صفحة الهبوط الرئيسية. تحتوي على:
  - حلقات نيون دوارة حول شعار ♻️
  - خلفية متحركة بالجسيمات (Particles)
  - أزرار: أبلغ عن مفرغة، جدول المواعيد، تسجيل الدخول، إنشاء حساب
  - أيقونة 🔔 للإشعارات في الشريط العلوي (مع عداد للإشعارات غير المقروءة)
  - قسم "دخول الموظفين" (للسائقين والمشرفين)
- **الأمان:** مفتوح للجميع

### 2. login.html (تسجيل الدخول)
- **المستخدم:** الزوار الذين يريدون التسجيل
- **الوظيفة:**
  - نموذج تسجيل دخول (بريد إلكتروني + كلمة مرور)
  - نموذج إنشاء حساب جديد
  - زر "نسيت كلمة المرور؟" يوجه إلى reset.html
  - بعد تسجيل الدخول الناجح، يوجه المستخدم إلى home.html
- **التقنية:** Supabase Auth (email/password)

### 3. reset.html (استعادة كلمة المرور)
- **المستخدم:** المستخدمون الذين نسوا كلمة مرورهم
- **الوظيفة:** إدخال البريد الإلكتروني لإرسال رابط استعادة كلمة المرور
- **التقنية:** Supabase Auth (resetPasswordForEmail)

### 4. home.html (لوحة تحكم المستخدم)
- **المستخدم:** المستخدم المسجل دخوله
- **الوظيفة:**
  - عرض رصيد النقاط الخضراء
  - بطاقات: أبلغ عن مفرغة، طلب جمع مواد، المكافآت، طلباتي
  - سجل آخر النشاطات (آخر 5 عمليات)
  - زر تسجيل الخروج
- **الأمان:** يتطلب Supabase Auth
- **البيانات:** تجلب من جدول pickups لعرض النقاط والسجل

### 5. report.html (نظام التبليغ الجغرافي SIG)
- **المستخدم:** المواطن (يمكن استخدامه بدون تسجيل)
- **الوظيفة:**
  - **الخطوة 1:** التقاط صورة للمفرغة (الكاميرا أو المعرض)
  - **الخطوة 2:** اختيار نوع النفايات (منزلية، بلاستيك، كرتون، زجاج، أنقاض، أخرى)
  - **الخطوة 3:** تحديد الموقع الجغرافي تلقائياً عبر GPS
  - **الخطوة 4:** إرسال البلاغ
- **التقنية:**
  - `getUserMedia` للكاميرا
  - `Geolocation API` للموقع
  - `fetch` لإرسال البيانات إلى Supabase
- **البيانات:** تكتب في جدول reports
- **زر الرجوع الذكي:** إذا كان المستخدم مسجلاً دخول ← يرجع إلى home.html، وإلا ← يرجع إلى index.html

### 6. sort.html (طلب جمع المواد)
- **المستخدم:** التاجر / صاحب المحل التجاري
- **الوظيفة:**
  - اختيار نوع المادة (كرتون 10pts/kg، بلاستيك 15pts/kg، زجاج 8pts/kg)
  - إدخال الوزن التقديري
  - رؤية النقاط المقدرة تلقائياً
  - تحديد الموقع عبر GPS
  - إرسال الطلب
- **البيانات:** تكتب في جدول pickups
- **نظام النقاط:** يحسب النقاط = الوزن × السعر، ويضيفها إلى localStorage و Supabase
- **زر الرجوع الذكي:** مثل report.html

### 7. driver.html (واجهة السائق)
- **المستخدم:** السائق / الجامع
- **الأمان:** كلمة مرور (افتراضياً: `1234`)
- **الوظيفة:**
  - عرض إحصائيات (مهام معلقة، مكتملة، كغ اليوم)
  - قائمة المهام المعلقة (بلاغات + طلبات جمع)
  - زر "تنقل" ← يفتح Google Maps للتوجيه إلى موقع المهمة
  - زر "تأكيد الجمع" ← يفتح كاميرا إثبات
  - بعد التصوير ← تأكيد وإرسال الإثبات
- **البيانات:**
  - تقرأ من: reports + pickups
  - تكتب في: completed
  - المهام المكتملة تختفي من القائمة المعلقة

### 8. dashboard.html (لوحة تحكم الإدارة)
- **المستخدم:** المشرف / مدير المنصة
- **الأمان:** كلمة مرور (تحفظ في جدول settings، الافتراضية: `admin2026`)
- **الوظيفة:** 8 تبويبات رئيسية:
  1. **📊 نظرة عامة:** إحصائيات (بلاغات، طلبات، مكتمل، CO₂) + خريطة تفاعلية
  2. **📋 البلاغات:** جدول بكل البلاغات مع حالة كل منها
  3. **📦 الفرز:** جدول بكل طلبات الجمع والمواد والكميات
  4. **🚛 الأسطول:** بطاقات الشاحنات وسائقيها (متاح/في مهمة)
  5. **🏭 المبيعات:** عروض شراء الشركات + أزرار (قبول، رفض، تأكيد دفع، إصدار فاتورة)
  6. **📈 تحليلات:** مخطط دائري (أنواع النفايات) + مخطط أعمدة (كميات المواد)
  7. **🧾 الفواتير:** جدول الفواتير الصادرة + زر طباعة
  8. **⚙️ إعدادات:** تغيير كلمة المرور، حالة القاعدة، تصدير CSV، تفريغ القاعدة
- **البيانات:** تقرأ وتكتب في جميع جداول Supabase

### 9. company.html (شركات التدوير)
- **المستخدم:** شركات التدوير الخارجية
- **الوظيفة:**
  - عرض إحصائيات المخزون المتاح (كرتون، بلاستيك، زجاج)
  - لكل مادة: الكمية المتاحة + السعر المرجعي
  - زر "🎯 عرض" ← نافذة إدخال الكمية المطلوبة والسعر المقترح
  - الإجمالي = الكمية × السعر
  - إرسال العرض ← يحفظ في جدول purchases
- **البيانات:**
  - المخزون = (ما جمعه السائق) - (ما تم بيعه ودفع ثمنه)
  - المشرف يدير العروض من dashboard (تبويب المبيعات)

### 10. schedule.html (جدول المواعيد)
- **المستخدم:** جميع الفئات
- **الوظيفة:** عرض جدول أسبوعي لمواعيد مرور شاحنات الجمع في أحياء ولاية برج بوعريريج
- **المحتوى:** مواعيد ثابتة حالياً (يمكن ربطها بقاعدة البيانات مستقبلاً)

### 11. invoice.html (صفحة الفاتورة)
- **المستخدم:** المشرف / شركة التدوير
- **الوظيفة:** عرض فاتورة رسمية للطباعة
- **التقنية:** تستقبل `?id=xxx` في الرابط، تجلب بيانات الفاتورة من جدول invoices
- **الطباعة:** زر 🖨️ يطبع الفاتورة بتصميم رسمي
- **الوصول:** تفتح من dashboard (تبويب 🧾 الفواتير)

### 12. notifications.html (مركز الإشعارات)
- **المستخدم:** جميع الفئات
- **الوظيفة:** عرض قائمة بآخر 20 إشعاراً من Supabase
- **أنواع الإشعارات:** info (أزرق)، warning (برتقالي)، success (أخضر)، danger (أحمر)
- **البيانات:** تقرأ من جدول notifications
- **الإدارة:** المشرف يضيف الإشعارات يدوياً من Supabase Table Editor

---

## 🗄️ قاعدة البيانات (Database Schema)

تم استخدام **Supabase** مع **PostgreSQL**. تحتوي قاعدة البيانات على 7 جداول:

### جدول `reports` (البلاغات)
| العمود | النوع | الوصف |
|--------|-------|-------|
| id | BIGSERIAL | المفتاح الرئيسي (تلقائي) |
| photo_url | TEXT | الصورة (base64 أو رابط) |
| type | TEXT | نوع النفايات |
| lat | DOUBLE PRECISION | خط العرض |
| lng | DOUBLE PRECISION | خط الطول |
| status | TEXT | الحالة (افتراضي: new) |
| created_at | TIMESTAMPTZ | وقت الإنشاء |

**الكود:**
```sql
CREATE TABLE IF NOT EXISTS reports (
    id BIGSERIAL PRIMARY KEY,
    photo_url TEXT,
    type TEXT,
    lat DOUBLE PRECISION,
    lng DOUBLE PRECISION,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

جدول pickups (طلبات الجمع)

العمود النوع الوصف
id BIGSERIAL المفتاح الرئيسي
material TEXT نوع المادة (carton/plastique/verre)
weight INTEGER الوزن بالكيلوغرام
points INTEGER النقاط المكتسبة
lat DOUBLE PRECISION خط العرض
lng DOUBLE PRECISION خط الطول
status TEXT الحالة (افتراضي: pending)
created_at TIMESTAMPTZ وقت الإنشاء

```sql
CREATE TABLE IF NOT EXISTS pickups (
    id BIGSERIAL PRIMARY KEY,
    material TEXT,
    weight INTEGER,
    points INTEGER,
    lat DOUBLE PRECISION,
    lng DOUBLE PRECISION,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

جدول completed (المهام المكتملة)

العمود النوع الوصف
id BIGSERIAL المفتاح الرئيسي
task_id TEXT معرف المهمة المكتملة
proof_photo TEXT صورة الإثبات
created_at TIMESTAMPTZ وقت الإكمال

```sql
CREATE TABLE IF NOT EXISTS completed (
    id BIGSERIAL PRIMARY KEY,
    task_id TEXT,
    proof_photo TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

جدول purchases (عروض الشراء)

العمود النوع الوصف
id BIGSERIAL المفتاح الرئيسي
material TEXT نوع المادة
quantity INTEGER الكمية المطلوبة (كغ)
price_per_kg INTEGER السعر المقترح للكيلوغرام
status TEXT الحالة (pending/accepted/paid/rejected)
created_at TIMESTAMPTZ وقت الإنشاء

```sql
CREATE TABLE IF NOT EXISTS purchases (
    id BIGSERIAL PRIMARY KEY,
    material TEXT,
    quantity INTEGER DEFAULT 0,
    price_per_kg INTEGER,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

جدول invoices (الفواتير)

العمود النوع الوصف
id BIGSERIAL المفتاح الرئيسي
purchase_id INTEGER رقم عملية الشراء المرتبطة
material TEXT نوع المادة
quantity INTEGER الكمية
price_per_kg INTEGER السعر للكيلوغرام
total INTEGER الإجمالي
company_name TEXT اسم الشركة
status TEXT الحالة
created_at TIMESTAMPTZ وقت الإصدار

```sql
CREATE TABLE IF NOT EXISTS invoices (
    id BIGSERIAL PRIMARY KEY,
    purchase_id INTEGER,
    material TEXT,
    quantity INTEGER,
    price_per_kg INTEGER,
    total INTEGER,
    company_name TEXT,
    status TEXT DEFAULT 'issued',
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

جدول settings (الإعدادات)

العمود النوع الوصف
id INTEGER المفتاح الرئيسي (دائماً 1)
admin_password TEXT كلمة مرور المشرف
updated_at TIMESTAMPTZ وقت التحديث

```sql
CREATE TABLE IF NOT EXISTS settings (
    id INTEGER PRIMARY KEY DEFAULT 1,
    admin_password TEXT DEFAULT 'admin2026',
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

جدول notifications (الإشعارات)

العمود النوع الوصف
id BIGSERIAL المفتاح الرئيسي
title TEXT عنوان الإشعار
message TEXT نص الإشعار
type TEXT نوع الإشعار (info/warning/success/danger)
is_read BOOLEAN هل تمت قراءته
created_at TIMESTAMPTZ وقت الإنشاء

```sql
CREATE TABLE IF NOT EXISTS notifications (
    id BIGSERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    message TEXT,
    type TEXT DEFAULT 'info',
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

🔄 سير العمل (Workflow)

1. دورة حياة البلاغ

```
المواطن ← يلتقط صورة + يحدد موقع ← report.html
         ↓
    Supabase (reports)
         ↓
    السائق ← يرى المهمة في driver.html ← يتنقل ← يؤكد الجمع
         ↓
    Supabase (completed)
         ↓
    المشرف ← يرى البلاغ مكتملاً في dashboard.html
```

2. دورة حياة طلب الجمع

```
التاجر ← يختار مادة + وزن + موقع ← sort.html
         ↓
    Supabase (pickups)
         ↓
    السائق ← يرى المهمة في driver.html ← يتنقل ← يؤكد الجمع
         ↓
    Supabase (completed)
         ↓
    المواد تصبح "متاحة" في company.html
```

3. دورة حياة الشراء

```
شركة التدوير ← ترى المخزون ← تقدم عرض (كمية + سعر) ← company.html
         ↓
    Supabase (purchases, status=pending)
         ↓
    المشرف ← dashboard.html (تبويب المبيعات)
         ├── ✅ قبول → status=accepted
         ├── ❌ رفض → status=rejected
         └── 💰 تأكيد الدفع → status=paid
              ↓
         Supabase (invoices) ← فاتورة رسمية
              ↓
         المخزون ينقص تلقائياً
```

4. نظام النقاط

```
التاجر يطلب جمع مواد:
    كرتون: 10 نقاط/كغ
    بلاستيك: 15 نقاط/كغ
    زجاج: 8 نقاط/كغ

النقاط تحفظ في localStorage + Supabase (pickups.points)
يمكن استبدالها بمكافآت من home.html
```

---

🎨 نظام التصميم (Design System)

الألوان

اللون الرمز الاستخدام
أخضر غامق #1B5E20 العناوين الرئيسية
أخضر متوسط #2E7D32 الأزرار الأساسية
أخضر فاتح #4CAF50 التدرجات والبطاقات
برتقالي #FF6F00 التحذيرات والأسعار
أحمر #E53935 البلاغات والحذف
أزرق #1E88E5 السائق والملاحة
ذهبي #FFD700 النقاط والمكافآت
بنفسجي #7B1FA2 الفواتير والإشعارات

الخطوط

· Cairo: الخط العربي الأساسي (جميع الأوزان من 300 إلى 900)
· Poppins: الخط اللاتيني المساعد (للأرقام والإحصائيات)

الخلفيات

· Dark theme: خلفية داكنة (#0a1a0a) مع تدرجات خضراء
· Particles: جسيمات متحركة تصاعدية
· Orbs: كرات ضبابية متحركة (أخضر، برتقالي، أزرق، بنفسجي)
· Glassmorphism: بطاقات زجاجية شفافة مع backdrop-filter: blur

---

🔐 نظام الأمان

الصفحة طريقة الحماية التفاصيل
index.html ❌ مفتوح -
report.html ❌ مفتوح يمكن التبليغ بدون تسجيل
sort.html ⚠️ اختياري يفضل تسجيل الدخول لكسب النقاط
home.html ✅ Supabase Auth يتطلب تسجيل دخول
driver.html 🔑 كلمة مرور 1234 (ثابتة في الكود)
dashboard.html 🔑 كلمة مرور تحفظ في جدول settings (افتراضياً: admin2026)
company.html ❌ مفتوح للشركات الخارجية
schedule.html ❌ مفتوح معلومات عامة
notifications.html ❌ مفتوح إشعارات عامة

---

📊 الميزات المكتملة

# الميزة الصفحة الحالة
1 نظام التبليغ الجغرافي (SIG) report.html ✅
2 طلب جمع المواد + نقاط sort.html ✅
3 واجهة السائق + ملاحة + إثبات driver.html ✅
4 لوحة تحكم (8 تبويبات) dashboard.html ✅
5 شركات التدوير + عروض شراء company.html ✅
6 نظام فواتير + طباعة dashboard + invoice.html ✅
7 تحليلات ورسوم بيانية dashboard.html (تبويب) ✅
8 جدول مواعيد الجمع schedule.html ✅
9 نظام تسجيل دخول login.html + home.html ✅
10 استعادة كلمة المرور reset.html ✅
11 إشعارات وتنبيهات notifications.html ✅
12 نظام إعدادات (تغيير كلمة المرور، تفريغ، تصدير) dashboard.html (تبويب) ✅
13 إدارة المخزون (تلقائي) company.html ✅
14 تتبع البصمة الكربونية (CO₂) dashboard.html ✅
15 خريطة تفاعلية (Leaflet) dashboard.html ✅
16 تصميم متجاوب (جميع الشاشات) جميع الصفحات ✅
17 PWA (تثبيت على الهاتف) index.html ✅

---

⏳ ما تبقى للتطوير (Roadmap)

# الميزة الوصف الأولوية
1 إصلاح عداد الإشعارات تحديث is_read تلقائياً عند فتح الصفحة ⭐⭐⭐
2 إشعارات تلقائية ربط إنشاء الإشعارات بأحداث المنصة ⭐⭐⭐
3 نظام QR Code ملصقات على الحاويات للمسح عند الجمع ⭐⭐
4 Geofencing تنبيه تلقائي عند اقتراب الشاحنة 1 كم ⭐⭐
5 Google Maps API (مباشر) استبدال Leaflet بخرائط Google ⭐
6 نظام تقييم السائقين تقييم أداء السائقين من قبل المشرف ⭐

---

🚀 التشغيل

رابط المنصة

```
https://davidrezgui.github.io/school-/
```

متطلبات التشغيل المحلي

· أي متصفح حديث (Chrome, Firefox, Safari, Edge)
· اتصال بالإنترنت (لتحميل Supabase و Chart.js و Leaflet)

النشر

· GitHub Pages للنشر المجاني
· Supabase للخطة المجانية (500MB قاعدة بيانات)

---

📄 الرخصة

MIT License - 2026

---

👤 المطور

David Rezgui

· GitHub: davidrezgui

---

♻️ معاً نحو جزائر نظيفة ومستدامة

