// 由于数据过多，每次改个数据都要重新打包页面，并上线整个页面，过于麻烦，因此专门写个data文件
import * as achievement from "./achievement";
import * as activity from "./activity";
import * as graduate from "./graduate";
import * as member from "./member";
import * as tutor from "./tutor";

(window as any).__data = {
    papers: achievement.paperList, // 期刊论文
    papers2: achievement.paperList2, // 会议论文
    patents: achievement.patentList, // 专利
    projects: achievement.projectList, // 项目
    professors: activity.professorList, // 合作教授
    activityPhoto: activity.photoList, // 活动照片
    AcademicSpeeches: activity.AcademicSpeechList, // 学术演讲
    companyInterviews: activity.companyInterviewList, // 公司特邀
    graduate: graduate.studentList, // 毕业生
    otherGraduate: graduate.otherStudentList, // 毕业生
    companies: graduate.companies, // 毕业生去的公司
    PhdOfGraduate: graduate.phdList, // 毕业的博士生
    Phd: member.studentList1, // 博士生
    masterOfFirstGrade: member.studentList3, // 硕士新生
    masters: member.studentList2, // 硕士生
    tutors: member.tutorList, // 导师
    tutorInfo: tutor.tutorInfoMap // 导师列表
}