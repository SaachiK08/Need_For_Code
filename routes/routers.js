const express = require("express");
const router = express.Router();
const fetchUniversities = require('../Database/mongoose'); 
const fetchUniversitiesByLocation =require ('../Database/mongos')
const fetchUniversitiesByLocation1 =require ('../Database/united-states')
const fetchUniversitiesByLocation2 =require ('../Database/nigeria')
const fetchUniversitiesByLocation3 =require ('../Database/europe')
const fetchUniversitiesByLocation4 =require ('../Database/canada')
const fetchUniversitiesByLocation5 =require ('../Database/pakistan')
const fetchUniversitiesByLocation6 =require ('../Database/united-kingdom')
const fetchUniversitiesByLocation7 =require ('../Database/south-africa')
const fetchUniversitiesByDegree =require ('../Database/degree/master')
const fetchUniversitiesByDegree1 =require ('../Database/degree/phd')
const fetchUniversitiesByDegree2 =require ('../Database/degree/bachelor')
const fetchUniversitiesByDegree3 =require ('../Database/degree/course')

router.get("/",(req,res)=>{
  let data = {
    css: '../public/css/index.css',
    script: '../public/js/main.js'
  };
  res.render("home",data)
})
router.get("/tutorial",(req,res)=>{
  let data = {
    css: '../public/css/tutorials.css',
    script: '../public/js/main.js'
  };
  res.render("tutorial",data)
})
router.get("/login",(req,res)=>{
  let data = {
    css: '../public/css/signup.css',
    script: '../public/js/in.js'
  };
  res.render("login",data)
})
router.get("/signup",(req,res)=>{
  let data = {
    css: '../public/css/signup.css',
    script: '../public/js/in.js'
  };
  res.render("signup",data)
})
router.get("/style",(req,res)=>{
  let data = {
    css: '../public/css/style.css',
    
  };
  res.render("style",data)
})
router.get("/status",(req,res)=>{
  let data = {
    css: '../public/css/status.css',
  };
  res.render("status",data)
})
router.get("/profile",(req,res)=>{
  let data = {
    css: '../public/css/profile.css',
  };
  res.render("profile",data)
})




router.get("/allunis", async (req, res) => {
  try {
    const universities = await fetchUniversities();

    if (!universities || universities.length === 0) {
      // Handle the case where no universities are found
      res.render("Resourcehub", { error: "No universities found." });
      return;
    }

    let data = {
      css: '../public/css/Resourcehub.css',
      script: '../public/js/Resourcehub.js',
      universities: universities
    };

    res.render("Resourcehub", data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/india", async (req, res) => {
  try {
    const universities = await fetchUniversitiesByLocation();

    if (!universities || universities.length === 0) {
      // Handle the case where no universities are found
      res.render("Resourcehub", { error: "No universities found." });
      return;
    }

    let data = {
      css: '../public/css/Resourcehub.css',
      script: '../public/js/Resourcehub.js',
      universities: universities
    };

    res.render("Resourcehub", data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/united-states", async (req, res) => {
  try {
    const universities = await fetchUniversitiesByLocation1();

    if (!universities || universities.length === 0) {
      // Handle the case where no universities are found
      res.render("Resourcehub", { error: "No universities found." });
      return;
    }

    let data = {
      css: '../public/css/Resourcehub.css',
      script: '../public/js/Resourcehub.js',
      universities: universities
    };

    res.render("Resourcehub", data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/nigeria", async (req, res) => {
  try {
    const universities = await fetchUniversitiesByLocation2();

    if (!universities || universities.length === 0) {
      // Handle the case where no universities are found
      res.render("Resourcehub", { error: "No universities found." });
      return;
    }

    let data = {
      css: '../public/css/Resourcehub.css',
      script: '../public/js/Resourcehub.js',
      universities: universities
    };

    res.render("Resourcehub", data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/europe", async (req, res) => {
  try {
    const universities = await fetchUniversitiesByLocation3();

    if (!universities || universities.length === 0) {
      // Handle the case where no universities are found
      res.render("Resourcehub", { error: "No universities found." });
      return;
    }

    let data = {
      css: '../public/css/Resourcehub.css',
      script: '../public/js/Resourcehub.js',
      universities: universities
    };

    res.render("Resourcehub", data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/canada", async (req, res) => {
  try {
    const universities = await fetchUniversitiesByLocation4();

    if (!universities || universities.length === 0) {
      // Handle the case where no universities are found
      res.render("Resourcehub", { error: "No universities found." });
      return;
    }

    let data = {
      css: '../public/css/Resourcehub.css',
      script: '../public/js/Resourcehub.js',
      universities: universities
    };

    res.render("Resourcehub", data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/pakistan", async (req, res) => {
  try {
    const universities = await fetchUniversitiesByLocation5();

    if (!universities || universities.length === 0) {
      // Handle the case where no universities are found
      res.render("Resourcehub", { error: "No universities found." });
      return;
    }

    let data = {
      css: '../public/css/Resourcehub.css',
      script: '../public/js/Resourcehub.js',
      universities: universities
    };

    res.render("Resourcehub", data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/united-kingdom", async (req, res) => {
  try {
    const universities = await fetchUniversitiesByLocation6();

    if (!universities || universities.length === 0) {
      // Handle the case where no universities are found
      res.render("Resourcehub", { error: "No universities found." });
      return;
    }

    let data = {
      css: '../public/css/Resourcehub.css',
      script: '../public/js/Resourcehub.js',
      universities: universities
    };

    res.render("Resourcehub", data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/south-africa", async (req, res) => {
  try {
    const universities = await fetchUniversitiesByLocation7();

    if (!universities || universities.length === 0) {
      // Handle the case where no universities are found
      res.render("Resourcehub", { error: "No universities found." });
      return;
    }

    let data = {
      css: '../public/css/Resourcehub.css',
      script: '../public/js/Resourcehub.js',
      universities: universities
    };

    res.render("Resourcehub", data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Degrees Filter
router.get("/master", async (req, res) => {
  try {
    const universities = await fetchUniversitiesByDegree();

    if (!universities || universities.length === 0) {
      // Handle the case where no universities are found
      res.render("Resourcehub", { error: "No universities found." });
      return;
    }

    let data = {
      css: '../public/css/Resourcehub.css',
      script: '../public/js/Resourcehub.js',
      universities: universities
    };

    res.render("Resourcehub", data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/phd", async (req, res) => {
  try {
    const universities = await fetchUniversitiesByDegree1();

    if (!universities || universities.length === 0) {
      // Handle the case where no universities are found
      res.render("Resourcehub", { error: "No universities found." });
      return;
    }

    let data = {
      css: '../public/css/Resourcehub.css',
      script: '../public/js/Resourcehub.js',
      universities: universities
    };

    res.render("Resourcehub", data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/bachelor", async (req, res) => {
  try {
    const universities = await fetchUniversitiesByDegree2();

    if (!universities || universities.length === 0) {
      // Handle the case where no universities are found
      res.render("Resourcehub", { error: "No universities found." });
      return;
    }

    let data = {
      css: '../public/css/Resourcehub.css',
      script: '../public/js/Resourcehub.js',
      universities: universities
    };

    res.render("Resourcehub", data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/course", async (req, res) => {
  try {
    const universities = await fetchUniversitiesByDegree3();

    if (!universities || universities.length === 0) {
      // Handle the case where no universities are found
      res.render("Resourcehub", { error: "No universities found." });
      return;
    }

    let data = {
      css: '../public/css/Resourcehub.css',
      script: '../public/js/Resourcehub.js',
      universities: universities
    };

    res.render("Resourcehub", data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
